---
title: Arrays and Pointers
id: arrays_and_pointers
sidebar_label: Arrays & Pointers
---

This document covers the relation between Arrays and Pointers in C.

Arrays and pointers are closely related in C. An array name acts as a pointer to its first element, enabling efficient memory access and manipulation. Understanding this relationship is crucial for working with dynamic memory allocation and passing arrays to functions.

In this section, we will cover:
- How arrays and pointers relate.
- Pointer arithmetic with arrays.
- Passing arrays to functions using pointers.
- Dynamic memory allocation (malloc, calloc, free).

## Relationship Between Arrays and Pointers

An array name acts as a constant pointer to its first element. This means:

- `arr` and `&arr[0]` hold the same address.
- `*(arr + i)` is equivalent to `arr[i]`.

#### Example: Understanding Array-Pointer Equivalence

```c
#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30};
    printf("Address of arr: %p\n", arr);
    printf("Address of arr[0]: %p\n", &arr[0]);
    printf("First element using pointer: %d\n", *arr);
    return 0;
}
```

:::info

- `arr` gives the address of the first element.
- `*arr` accesses the first element.
- `arr + 1` moves to the next element.

:::

## Pointer Arithmetic with Arrays
Since arrays are stored in contiguous memory locations, pointers can be used to traverse them.

#### Example: Iterating Using Pointer Arithmetic
```c
#include <stdio.h>
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    for (int i = 0; i < 5; i++) {
        printf("Element %d: %d\n", i, *(ptr + i));
    }
    return 0;
}
```

:::info

`ptr + i` moves the pointer forward by i elements. `*(ptr + i)` retrieves the element at that position.

:::

## Passing Arrays to Functions Using Pointers

When passing an array to a function, what is actually passed is a pointer to its first element.

#### Example: Function That Modifies an Array
```c
#include <stdio.h>
void modifyArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2; // Modifies original array
    }
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    modifyArray(numbers, size);
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    return 0;
}
```

:::info

**Why does this work?** Arrays are passed as pointers, meaning the function modifies the original array.

:::

## Dynamic Memory Allocation
C allows dynamic allocation of memory at runtime using malloc, calloc, and free. This section just covers it in brief.

### Allocating Memory with malloc
Allocates a block of memory without initializing it.

```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int *arr = (int *)malloc(5 * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    free(arr); // Free allocated memory
    return 0;
}
```

:::info

- `malloc(size)` allocates size bytes of memory.
- Always use `free(ptr)` to avoid memory leaks.

:::

## Common Pitfalls
### Pointer Decay
Arrays decay into pointers when passed to functions, losing their size information.

#### Solution: 
Always pass the array size explicitly.

### Memory Leaks
Failing to free dynamically allocated memory causes memory leaks.

#### Solution: 
Use `free(ptr)` after you're done with allocated memory.

### Dangling Pointers

Accessing freed memory results in undefined behavior.
#### Solution: 
Set pointers to NULL after `free()`.

#### Dynamic Memory allocation has been described in depth in the next chapter.