---
title: Pointer to Functions
id: pointer_to_function
sidebar_label: Pointer to Functions
---

This document covers Pointer to Functions in C.

A pointer to a function allows storing the address of a function and calling it dynamically. This is useful for callback functions, dynamic function selection, and implementing event-driven programming.

In this section, we will cover:
- What function pointers are and how they work.
- Declaring and assigning function pointers.
- Calling functions through pointers.
- Using function pointers as arguments (callbacks).
- Array of function pointers.
- Real-world applications of function pointers.

## What is a Pointer to a Function?
A function pointer is a variable that stores the memory address of a function, allowing indirect function calls.

### Declaring a Function Pointer
```c
returnType (*pointerName)(parameterTypes);
```

#### Example
```c
int (*funcPtr)(int, int);  // Pointer to a function taking two ints and returning an int
```

### Assigning a Function to a Pointer
```c
#include <stdio.h>
int add(int a, int b) {
    return a + b;
}
int main() {
    int (*funcPtr)(int, int) = add; // Assign function address
    printf("Sum: %d\n", funcPtr(5, 3)); // Call function via pointer
    return 0;
}
```

:::info

- `funcPtr = add;` stores the function's address.

- `funcPtr(5, 3);` calls `add()` via pointer.

:::

## Function Pointers as Arguments (Callbacks)
A callback function is a function passed as an argument to another function, commonly used for event-driven programming.

#### Example: Using Function Pointers as Arguments
```c
#include <stdio.h>
void executeOperation(int a, int b, int (*operation)(int, int)) {
    printf("Result: %d\n", operation(a, b));
}

int multiply(int x, int y) {
    return x * y;
}

int main() {
    executeOperation(4, 5, multiply); // Pass function as argument
    return 0;
}
```

:::info

`executeOperation()` receives a function pointer as an argument. It can call any function that matches the expected signature.

:::

## Array of Function Pointers
An array of function pointers allows selecting a function dynamically from a set of predefined functions.

#### Example: Function Pointer Array for a Calculator
```c
#include <stdio.h>
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { return (b != 0) ? a / b : 0; }

int main() {
    int (*operations[4])(int, int) = {add, subtract, multiply, divide};
    int choice, a = 10, b = 2;
    printf("Choose operation: 0-Add, 1-Subtract, 2-Multiply, 3-Divide: ");
    scanf("%d", &choice);
    if (choice >= 0 && choice < 4)
        printf("Result: %d\n", operations[choice](a, b));
    else
        printf("Invalid choice!\n");
    return 0;
}
```

:::info

The array operations holds pointers to different mathematical functions. The user selects an operation dynamically at runtime.

:::

## Real-World Applications of Function Pointers
- Callbacks in event-driven programs (e.g., GUI programming).
- Dynamic dispatch in C-based frameworks (e.g., function hooks in embedded systems).
- Sorting algorithms (e.g., qsort() uses function pointers to compare elements).
