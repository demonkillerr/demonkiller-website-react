---
title: Arrays of Pointers
id: arrays_of_pointers
sidebar_label: Arrays of Pointers
---

An Array of Pointers is an array where each element is a pointer. This allows storing multiple memory addresses instead of actual values, making it useful for managing strings, dynamic arrays, and function pointers.

In this section, we will cover:
- What an array of pointers is.
- How to declare and initialize an array of pointers.
- Difference between pointer arrays and arrays of pointers.
- Practical use cases: Strings, Dynamic 2D Arrays.
- Common pitfalls and best practices.

## Declaring and Initializing an Array of Pointers

### Declaring an Array of Pointers
```c
<datatype> *arrayName[size];
```

#### Example
```c
int *arr[3];  // Declares an array of 3 integer pointers
```

### Initializing an Array of Pointers
Each element of an array of pointers stores a memory address.
```c
#include <stdio.h>
int main() {
    int a = 10, b = 20, c = 30;
    int *arr[3] = {&a, &b, &c};  // Array of pointers storing addresses
    
    for (int i = 0; i < 3; i++) {
        printf("Value at arr[%d]: %d\n", i, *arr[i]);
    }
    return 0;
}
```
:::info

`arr[0]` stores `&a`, `arr[1]` stores `&b`, and so on.

`*arr[i]` accesses the actual values (`10, 20, 30`).

:::

## Pointer Arrays vs. Arrays of Pointers
| **Concept**          | **Definition**                          | **Example**        |
|----------------------|--------------------------------------|------------------|
| **Pointer Array**    | A single pointer that points to an array. | `int (*ptr)[5];`  |
| **Array of Pointers** | An array where each element is a pointer. | `int *arr[5];`    |


#### Example of a Pointer to an Array
```c
int arr[5] = {1, 2, 3, 4, 5};
int (*ptr)[5] = &arr;  // Pointer to the entire array
printf("First element: %d\n", (*ptr)[0]);
```
:::tip

ptr points to the entire array, not individual elements.

:::

## Using an Array of Pointers for Strings

An array of pointers is commonly used to store multiple strings efficiently.
```c
#include <stdio.h>
int main() {
    char *names[] = {"Alice", "Bob", "Charlie"};  // Array of pointers to strings
    
    for (int i = 0; i < 3; i++) {
        printf("Name[%d]: %s\n", i, names[i]);
    }
    return 0;
}
```

:::info

Each element of names[] stores a pointer to a string. Strings are not copied, making this memory efficient.

:::

## Using an Array of Pointers for a Dynamic 2D Array
Unlike fixed-size 2D arrays, dynamic 2D arrays allow flexible memory management.

### Allocating a 2D Array Dynamically
```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int rows = 3, cols = 3;
    int **matrix = (int **)malloc(rows * sizeof(int *));
    
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int *)malloc(cols * sizeof(int));
    }
    
    // Assigning values
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j + 1;
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    
    // Free memory
    for (int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);
    return 0;
}
```

:::info

`matrix` is an array of pointers, each pointing to a dynamically allocated row. This method allows creating non-square matrices dynamically. You must free memory after usage to avoid leaks.

:::

## Common Pitfalls and Best Practices
### Dangling Pointers
If a pointer in an array is freed without updating the reference, it leads to a dangling pointer.
#### Solution: 
Set the pointer to NULL after freeing.
```c
free(arr[0]);
arr[0] = NULL;  // Prevents accessing freed memory
```

### Out-of-Bounds Access
Accessing an index beyond the allocated size results in undefined behavior.
#### Solution: 
Always check array bounds.

### Forgetting to Free Dynamically Allocated Memory
Dynamically allocated memory should be freed to prevent memory leaks.
#### Solution: 
Always free() each allocated pointer.