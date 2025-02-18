---
title: Functions
id: functions
sidebar_label: Functions
---

This document covers Functions & Program Structure in C.

Functions are a fundamental building block in C programming that allow for modular, reusable, and maintainable code. Understanding function structure and program organization is key to writing efficient C programs.

In this section, we will cover:

- Function structure in modern C.
- Multi-function programs and how to split code into multiple functions.
- Function arguments, including pass-by-value and pass-by-reference.
- Using pointers with function arguments (briefly, as pointers will be covered in depth later).

## Function Structure in Modern C
A function in C consists of:

- Return type: Specifies the type of value the function returns.
- Function name: Identifier used to call the function.
- Parameter list: Inputs passed to the function (optional).
- Function body: Contains the executable statements.
- Return statement: (Optional) Returns a value if the function is non-void.

#### Example of a Simple Function
```c
#include <stdio.h>

// Function prototype (declaration)
int add(int a, int b);

int main() {
    int result = add(5, 10);
    printf("Sum: %d\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
```

:::info

- Function declaration (prototype) before `main()` allows the compiler to know about the function before it's defined.
- Function definition contains the actual logic.
- Function call in `main()` invokes the function.

:::

## Multi-Function Programs in Modern C
For larger programs, breaking code into multiple functions makes it more readable and maintainable.

```c
#include <stdio.h>

void greet();
int square(int n);

int main() {
    greet();
    int num = 4;
    printf("Square of %d is %d\n", num, square(num));
    return 0;
}

void greet() {
    printf("Hello! Welcome to the program.\n");
}

int square(int n) {
    return n * n;
}
```

:::info

- `greet()` is a void function (does not return a value).
- `square(int n)` returns an integer value.
- The program remains structured and readable.

:::

## Function Arguments in C
Function arguments allow passing values to functions.

### Pass-by-Value (Default Behavior)
The function receives a copy of the variable. Changes made inside the function do not affect the original variable. This is the most common way of passing arguments in C.

#### Example
```c
#include <stdio.h>
void modify(int x);

int main() {
    int num = 10;
    modify(num);
    printf("Value after function call: %d\n", num); // Still 10
    return 0;
}

void modify(int x) {
    x = 20; // This change is local to the function
}
```

#### Advantages and Disadvantages of Pass by Value
##### Advantages:

- Prevents unintended modifications of the original variable.
- Ensures function encapsulation (modifications remain within the function).

##### Disadvantages:

- Copies the entire value, which can be inefficient for large data structures.

### Pass-by-Reference Using Pointers
Instead of passing a copy, we pass a memory address. Changes inside the function affect the original variable. This method is used when modifying data directly is needed.

:::note

This section contain information about pointers. Pointers are covered in depth in the next chapter.

:::

#### Example
```c
#include <stdio.h>
void modify(int *x);

int main() {
    int num = 10;
    modify(&num);
    printf("Value after function call: %d\n", num); // Now 20
    return 0;
}

void modify(int *x) {
    *x = 20; // Modifies the actual variable
}
```

:::info

- `int *x` indicates a pointer parameter.

- `modify(&num);` passes the memory address of num.

- `*x = 20;` modifies the original num variable.

:::

#### Advantages and Disadvantages of Pass by Reference

##### Advantages:

- Avoids unnecessary copying, making it more efficient for large data structures.
- Allows functions to modify the original variable directly.

##### Disadvantages:

- Requires explicit handling of pointers, increasing complexity.
- Modifications persist outside the function, which may lead to unintended side effects.

## Return Values and Void Functions
Functions can return values or perform actions without returning anything.

### Return a value
```c
int multiply(int a, int b) {
    return a * b;
}
```

### Void Functions (No Return Value)
```c
void printMessage() {
    printf("This is a message.\n");
}
```

## `const` in Function Parameters
Using `const` in function parameters prevents modification of input values.

```c
void printMessage(const char *msg) {
    printf("%s\n", msg);
}
```

:::info

Prevents accidental modification of the input string. Helps in optimizing the code as the compiler knows the value won’t change.

:::