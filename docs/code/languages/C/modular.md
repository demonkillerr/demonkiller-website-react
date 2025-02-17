---
title: Modular Programming in C
id: modular
sidebar_label: Modular Programming
---

This document covers Modular Programming in C.

Modular programming is a software design approach that promotes breaking down programs into smaller, reusable components. In C, this is achieved using header files (.h) to declare functions and separate implementation files (.c) to define them. This approach improves code reusability, maintainability, and organization.

In this section, we will cover:

- Using header files (.h) for function declarations.
- Separating implementation into multiple .c files.
- Compiling modular code using Makefiles.
- Understanding Makefiles in depth.

## Why Use Header Files?
#### Benefits of .h Files:
- Encapsulation – Hide implementation details while exposing only function declarations.
- Code Reusability – Functions can be reused in multiple files.
- Separation of Concerns – Keeps function prototypes separate from definitions for better organization.
- Compile-Time Safety – Ensures function prototypes are known before they are used.

## Structuring a Modular C Program
#### Example: Splitting Code into Multiple Files

##### File Structure
```bash
project/
│── main.c
│── math_operations.c
│── math_operations.h
│── Makefile
```

##### `math_operations.h` (Header File)
```c
#ifndef MATH_OPERATIONS_H
#define MATH_OPERATIONS_H

// Function prototypes
int add(int a, int b);
int multiply(int a, int b);

#endif // MATH_OPERATIONS_H
```

:::info

Only function prototypes (declarations) are defined here.

:::

:::tip

The `#ifndef`, `#define`, and `#endif` prevent multiple inclusions of the header file.
They are known as inclusion guards.

:::

##### `math_operations.c` (Implementation File)
```c
#include "math_operations.h"

// Function implementations
int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
```
:::info

Implements the functions declared in math_operations.h.

:::

:::tip

The `#include "math_operations.h"` ensures function prototypes match their implementations.

:::

##### `main.c` (Main Program)
```c
#include <stdio.h>
#include "math_operations.h"

int main() {
    int x = 5, y = 10;
    printf("Sum: %d\n", add(x, y));
    printf("Product: %d\n", multiply(x, y));
    return 0;
}
```

:::tip

Uses functions from `math_operations.h` without exposing their implementations.

:::

## Compiling Modular Code with Makefiles
### Why Use a Makefile?
- **Automates compilation** – No need to type long gcc commands.
- **Tracks dependencies** – Only recompiles changed files, making builds faster.
- **Organized build process** – Ensures consistent and structured compilation.

### Example Makefile for this program
```make
CC = gcc
CFLAGS = -Wall

all: main

main: main.o math_operations.o
	$(CC) $(CFLAGS) -o main main.o math_operations.o

main.o: main.c math_operations.h
	$(CC) $(CFLAGS) -c main.c

math_operations.o: math_operations.c math_operations.h
	$(CC) $(CFLAGS) -c math_operations.c

clean:
	rm -f *.o main
```

### Explaination
- CC = gcc sets the compiler.
- CFLAGS = -Wall enables warnings.
- all: defines the default target (main executable).
- main: depends on main.o and math_operations.o.
- clean: removes compiled files.

##### To compile, run:
```bash
make
```

##### To remove compiled files:
```bash
make clean
```