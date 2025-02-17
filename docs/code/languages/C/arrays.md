---
title: Arrays in C
id: arrays
sidebar_label: Arrays
---

This document covers Arrays in C.

An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow efficient data storage and access, making them fundamental to C programming.

In this section, we will cover:
- Declaring and initializing arrays.
- Accessing and modifying array elements.
- Iterating through arrays using loops.
- Multidimensional arrays (2D arrays and beyond).
- Common pitfalls with arrays.

## Declaring and Initializing Arrays
### Declaring an Array

Arrays in C are declared using the following syntax:
```c
<datatype> arrayName[size];
```

#### Example
```c
int numbers[5];  // Declares an integer array of size 5
```

### Initializing an Array
Arrays can be initialized in different ways:

```c
int numbers[5] = {1, 2, 3, 4, 5};  // Direct initialization
int zeros[5] = {0};  // Initializes all elements to 0
int implicitSize[] = {10, 20, 30};  // Compiler determines size (3 elements)
```

## Accessing and Modifying Array Elements
Each array element is accessed using an index, starting from 0.

```c
#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};
    printf("First element: %d\n", arr[0]);  // Accessing element
    arr[1] = 50;  // Modifying element
    printf("Updated second element: %d\n", arr[1]);
    return 0;
}
```

:::info

- `arr[0]` refers to the first element.

- `arr[1] = 50;` updates the second element.

:::

## Iterating Through an Array
Arrays are commonly accessed using loops.

### Using a for Loop
```c
#include <stdio.h>
int main() {
    int arr[] = {5, 10, 15, 20};
    int size = sizeof(arr) / sizeof(arr[0]); // Determine size of array
    for (int i = 0; i < size; i++) {
        printf("Element %d: %d\n", i, arr[i]);
    }
    return 0;
}
```

:::info

`sizeof(arr) / sizeof(arr[0])` calculates the number of elements.

:::

### Using a while Loop
```c
#include <stdio.h>
int main() {
    int arr[] = {2, 4, 6, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    int i = 0;
    while (i < size) {
        printf("Element %d: %d\n", i, arr[i]);
        i++;
    }
    return 0;
}
```

## Multidimensional Arrays (2D Arrays)
A multidimensional array is an array of arrays. The most common type is a 2D array, used for matrices.

### Declaring and Initializing a 2D Array
```c
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

### Accessing 2D Array Elements
```c
#include <stdio.h>
int main() {
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printf("Element at row 1, column 2: %d\n", matrix[1][2]);  // Output: 6
    return 0;
}
```

### Iterating Through a 2D Array
```c
#include <stdio.h>
int main() {
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
```

:::tip

C is a row-major language. Outer loop iterates through rows. Inner loop iterates through columns.

:::

## Common Pitfalls with Arrays
### Out-of-Bounds Access
Accessing an index beyond the allocated size leads to undefined behavior.

```c
int arr[3] = {1, 2, 3};
printf("Out-of-bounds access: %d\n", arr[5]);  // Undefined behavior!
```

##### Solution
Always check array bounds before accessing elements.

### Uninitialized Arrays
Using uninitialized arrays leads to garbage values.

```c
int arr[5];  // Uninitialized array
printf("First element: %d\n", arr[0]);  // Contains unpredictable data
```

##### Solution
Initialize arrays explicitly.