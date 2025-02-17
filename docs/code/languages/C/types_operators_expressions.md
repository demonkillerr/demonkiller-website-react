---
title: Types, Operators & Expressions
id: types_operators_expression
sidebar_label: Types, Operators & Expressions
---

This document covers Types, Operators & Expressions in C.

In this section, we will cover the fundamental building blocks of the C programming language: data types, operators, and expressions. Understanding these concepts is crucial as they form the foundation for writing efficient and effective C programs.

## Data Types in C
C provides various data types to store different kinds of values. These can be categorized into:

### Primary Datatypes

| Type  | Size (bytes) | Description |
|-------|-------------|-------------|
| `char`  | 1  | Stores a single character |
| `int`  | 4  | Stores whole numbers |
| `float`  | 4  | Stores decimal numbers |
| `double`  | 8  | Stores double-precision floating-point numbers |
| `void`  | 0  | Represents no type (used for functions) |

#### Example:
```c
#include <stdio.h>
int main() {
    int a = 10;
    float b = 5.5;
    char c = 'X';
    printf("Integer: %d\n", a);
    printf("Float: %.1f\n", b);
    printf("Character: %c\n", c);
    return 0;
}
```

### Derived Datatypes
- Arrays: Collection of elements of the same type.
- Pointers: Variables that store memory addresses.
- Structures (struct): User-defined data types that group related variables.
- Enumerations (enum): Used to assign names to integral constants.

## Operators
Operators allow you to perform operations on variables and values.

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Modulus | `a % b` (remainder) |

#### Example:
```c
int sum = 10 + 5;
printf("Sum: %d", sum);
```

### Comparison Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `a == b` |
| `!=` | Not equal to | `a != b` |
| `>` | Greater than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Greater than or equal to | `a >= b` |
| `<=` | Less than or equal to | `a <= b` |

### Logical Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND | `a > 5 && b < 10` |
| `||` | Logical OR | `a > 5 || b < 10` |
| `!` | Logical NOT | `!(a > b)` |

#### Example in an if statement
```c
if (a > 5 && b < 10) {
    printf("Both conditions are true");
}
```
:::note

Please note that if statements will be covered in control flow.

:::

### Bitwise Operators
`&` (AND), `|` (OR), `^` (XOR), `<<` (Left Shift), `>>` (Right Shift)

Used for low-level operations like setting or clearing bits.

#### Example: 
```c
int a = 5; // 0101 in binary
int b = 3; // 0011 in binary
printf("Bitwise AND: %d", a & b); // Output: 1 (0001 in binary)
```

### Assignment Operators
| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `a = 10;` | Assign 10 to `a` |
| `+=` | `a += 5;` | `a = a + 5;` |
| `-=` | `a -= 5;` | `a = a - 5;` |
| `*=` | `a *= 5;` | `a = a * 5;` |
| `/=` | `a /= 5;` | `a = a / 5;` |
| `%=` | `a %= 5;` | `a = a % 5;` |

### Increment and Decrement Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `++` | Increment by 1 | `a++` or `++a` |
| `--` | Decrement by 1 | `a--` or `--a` |

## Expressions in C
Expressions combine values, operators, and variables to produce results.

#### Example:
```c
int x = (10 + 5) * 2;
printf("Result: %d", x);
```

### Operator Precedence
- `* / %` > `+ -` > `== != > <` > `&& ||`
- Parentheses `()` overrides all precedence

#### Example: 
```c
int result = 5 + 3 * 2; // Output: 11
int correct = (5 + 3) * 2; // Output: 16
```