---
title: Pointers in C
id: pointers
sidebar_label: Pointers
---

This document covers Pointers in C.

Pointers are one of the most powerful features of the C programming language. They allow direct memory access, making programs efficient but also prone to errors if not handled correctly. Understanding pointers is essential for low-level programming, memory management, and optimizing performance.

In this section, we will cover:

- What a pointer is and how it works.
- NULL pointers and their significance.
- Dereferencing and using & (address-of) and * (dereference) operators.
- Pointer arithmetic and how pointers interact with arrays.
- Common pointer-related problems, including memory leaks and stack overflows.

## What is a Pointer?
A pointer is a variable that stores the memory address of another variable. Instead of holding a direct value, it holds the location where the value is stored.

### Declaring a Pointer
A pointer is declared using the * operator.

```c
int *ptr;  // Declares a pointer to an integer
```

### Assigning an Address to a Pointer
We use the address-of (&) operator to get the address of a variable and assign it to a pointer.\

#### Example
```c
#include <stdio.h>
int main() {
    int num = 10;
    int *ptr = &num;  // Pointer stores the address of num
    printf("Address of num: %p\n", ptr);
    printf("Value of num using pointer: %d\n", *ptr);
    return 0;
}
```

:::info

- `&num` gives the memory address of num.

- ptr stores this address.

- `*ptr` (dereferencing) retrieves the value stored at that address.

:::

### `const` with Pointers
| **Declaration** | **Meaning** |
|----------------|------------|
| `const int *ptr` | Pointer to a constant integer (cannot modify the value) |
| `int *const ptr` | Constant pointer to an integer (cannot change the pointer address) |
| `const int *const ptr` | Constant pointer to a constant integer (neither value nor address can change) |

#### Example
```c
const int value = 10;
const int *ptr = &value;  // Pointer to a constant integer
*ptr = 20;  // Error: Cannot modify the value
```

## NULL Pointers
A NULL pointer is a pointer that does not point to any valid memory location.

```c
int *ptr = NULL;  // Pointer initialized to NULL
```

### Why Use NULL Pointers?

- Prevents accessing uninitialized pointers.
- Can be used to check if memory allocation was successful.
- Helps avoid undefined behavior in programs.

### Checking for NULL Before Dereferencing
:::danger

Dereferencing a NULL pointer causes a segmentation fault. Always check before dereferencing:

:::

#### Example
```c
#include <stdio.h>
int main() {
    int *ptr = NULL;
    if (ptr == NULL) {
        printf("Pointer is NULL, cannot dereference\n");
    }
    return 0;
}
```

## Pointer Arithmetic
### Incrementing and Decrementing Pointers
Pointers can be incremented or decremented to traverse memory locations.

#### Example
```c
#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};
    int *ptr = arr;  // Points to the first element
    printf("First element: %d\n", *ptr);
    ptr++;  // Moves to the next element
    printf("Second element: %d\n", *ptr);
    return 0;
}
```

:::info

- ptr++ moves the pointer to the next element in the array.

- ptr-- moves the pointer back.

:::

### Pointer Arithmetic with Arrays
Pointers and arrays are closely related. An array name is a pointer to its first element.

#### Example
```c
#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};
    int *ptr = arr;
    for (int i = 0; i < 3; i++) {
        printf("Element %d: %d\n", i, *(ptr + i));
    }
    return 0;
}
```

:::info

`ptr + i` moves the pointer to different elements in the array.

:::

## Common Pointer-Related Problems
### Memory Leaks
Memory leaks occur when dynamically allocated memory is not freed.

```c
#include <stdlib.h>
int main() {
    int *ptr = (int *)malloc(sizeof(int));
    *ptr = 42;
    // Forgot to free memory: memory leak occurs
    return 0;
}
```

#### Solution:
Solution: Always free dynamically allocated memory.
```c
free(ptr);
```

### Dangling Pointers
A dangling pointer points to memory that has been freed.

#### Solution
Set the pointer to NULL after freeing it.

```c
free(ptr);
ptr = NULL;
```

### Pointer Arithmetic Errors
Incorrect pointer arithmetic can lead to out-of-bounds access.

```c
int arr[3] = {1, 2, 3};
int *ptr = arr;
printf("Out-of-bounds access: %d\n", *(ptr + 5)); // Undefined behavior
```

#### Solution
Always check pointer bounds before accessing memory.

### Stack Overflow Due to Excessive Recursion
Using pointers in recursion without an exit condition can cause a stack overflow.
```c
void recursiveFunction() {
    int num;
    recursiveFunction();  // No exit condition: leads to stack overflow
}
```

#### Solution 
Ensure a base case in recursive functions.