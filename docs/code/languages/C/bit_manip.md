---
title: Bitwise Operators & Bit Manipulation in C
id: bit_manip
sidebar_label: Bit Manipulation
---

This document covers Bitwise Operators & Bit Manipulation in C.

Bitwise operators in C allow manipulation of individual bits within data types. They are used in low-level programming, memory optimization, encryption, and embedded systems.

In this section, we will cover:
- Bitwise AND `(&)`, OR `(|)`, XOR `(^)`, NOT `(~)`.
- Left Shift `(<<)` and Right Shift `(>>)`.
- Bit Masks (Setting, Clearing, and Toggling Bits).
- Practical Use Cases in Optimization and Low-Level Programming.

## Bitwise Operators in C

### Overview of Bitwise Operators
### **Overview of Bitwise Operators**
| **Operator** | **Symbol** | **Description** | **Example (`a = 5, b = 3`)** |
|-------------|-----------|----------------|--------------------------|
| **Bitwise AND** | `&` | Performs AND on each bit | `5 & 3 = 1` (0101 & 0011 = 0001) |
| **Bitwise OR** | `|` | Performs OR on each bit | `5 | 3 = 7` (0101 | 0011 = 0111) |
| **Bitwise XOR** | `^` | Performs XOR (exclusive OR) on each bit | `5 ^ 3 = 6` (0101 ^ 0011 = 0110) |
| **Bitwise NOT** | `~` | Inverts each bit | `~5 = -6` (Two's complement) |
| **Left Shift** | `<<` | Shifts bits to the left | `5 << 1 = 10` (0101 → 1010) |
| **Right Shift** | `>>` | Shifts bits to the right | `5 >> 1 = 2` (0101 → 0010) |



- Bitwise AND `(&)` is useful for bit masking.
- Bitwise OR `(|)` is used to set bits.
- Bitwise XOR `(^)` is used for toggling bits and encryption.
- Left shift `(<<)` is equivalent to multiplying by powers of two.
- Right shift `(>>)` is equivalent to integer division by powers of two.

## Practical Bitwise Operations

### Setting a Bit (Bit Masking with OR |)

To set a specific bit to 1:

```c
num = num | (1 << bitPosition);
```

#### Example: Setting the 3rd Bit of num (Starting from 0)

```c
#include <stdio.h>
int main() {
    int num = 5;  // Binary: 0101
    num |= (1 << 2);  // Set bit at position 2
    printf("New value: %d\n", num);  // Output: 7 (0111)
    return 0;
}
```
:::tip

Use Case: Setting feature flags, permissions, or hardware registers.

:::

### Clearing a Bit (Using AND & and NOT ~)

To clear a specific bit (set it to 0):
```c
num = num & ~(1 << bitPosition);
```

#### Example: Clearing the 2nd Bit of num
```c
#include <stdio.h>
int main() {
    int num = 7;  // Binary: 0111
    num &= ~(1 << 2);  // Clear bit at position 2
    printf("New value: %d\n", num);  // Output: 3 (0011)
    return 0;
}
```
:::tip

Use Case: Disabling specific bits in configuration settings.

:::

### Toggling a Bit (Using XOR ^)
To toggle (flip) a specific bit:
```c
num = num ^ (1 << bitPosition);
```

#### Example: Toggling the 1st Bit of num
```c
#include <stdio.h>
int main() {
    int num = 5;  // Binary: 0101
    num ^= (1 << 1);  // Toggle bit at position 1
    printf("New value: %d\n", num);  // Output: 7 (0111)
    return 0;
}
```

:::tip

Use Case: Useful in encryption and bit manipulation algorithms.

:::

## Bitwise Shifting (`<<, >>`)

### Left Shift `(<<)` – Multiplication by Powers of 2
Shifting left multiplies by `2^n`.

```c
#include <stdio.h>
int main() {
    int num = 3;
    printf("%d\n", num << 1);  // Output: 6
    printf("%d\n", num << 2);  // Output: 12
    return 0;
}
```
:::tip

Use Case: Fast multiplication without using `*`.

:::

### Right Shift `(>>)` – Division by Powers of 2
Shifting right divides by `2^n`.
```c
#include <stdio.h>
int main() {
    int num = 16;
    printf("%d\n", num >> 1);  // Output: 8
    printf("%d\n", num >> 2);  // Output: 4
    return 0;
}
```
:::tip

Use Case: Fast division without using `/`.

:::

## Checking If a Number is Even or Odd (Using &)
```c
#include <stdio.h>
int main() {
    int num = 7;
    if (num & 1)
        printf("Odd\n");
    else
        printf("Even\n");
    return 0;
}
```
:::tip 

Why? Even numbers end in 0 in binary, and odd numbers end in 1.

