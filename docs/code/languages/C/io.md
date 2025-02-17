---
title: Input and Output
id: io
sidebar_label: Input & Output
---

This document covers Input and Output in C.

Input and output (I/O) operations are essential for interacting with users and handling data in C programs. The C standard library provides functions like printf() for output and scanf() for input. Additionally, escape sequences help in formatting output effectively.

## Output using `printf()`
The `printf()` function displays formatted output on the screen. It supports various **format specifiers** to print different types of data.

#### Syntax
```c
printf("Some text is: %fs \n", var_name); 
```
:::info

`fs` is the format specifier depending of the type of the variable.

:::

#### Example
```c
#include <stdio.h>
int main() {
    int age = 25;
    printf("Your age is: %d\n", age);
    return 0;
}
```

:::info

Here, `%d` is a **format specifier** that tells `printf()` to print an integer value.

:::

## Input using `scanf()`

The `scanf()` function is used to take user input. The `&` (address-of) operator is required when storing input in variables.

#### Syntax
```c
scanf("%fs", var_name); //where fs is the format specifier
```

#### Example: 
```c
#include <stdio.h>
int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You entered: %d\n", age);
    return 0;
}
```
:::info

Here, `%d` is used for reading an integer input from the user.

:::

## Common Format Specifiers
| Specifier | Data Type | Example |
|-----------|------------|---------|
| `%d` | Integer (`int`) | `printf("%d", 10);` |
| `%f` | Floating-point (`float`) | `printf("%.2f", 3.14);` |
| `%c` | Character (`char`) | `printf("%c", 'A');` |
| `%s` | String (`char[]`) | `printf("%s", "Hello");` |
| `%lf` | Double (`double`) | `printf("%lf", 3.14159);` |

#### Example: 
```c
float pi = 3.14159;
printf("Value of Pi: %.2f\n", pi);
```

:::info

Here, `%.2f` ensures that only two decimal places of pi are printed.

:::

## Escape Sequences
Escape sequences allow special characters to be included in strings while maintaining readability and proper formatting.

| Escape Sequence | Meaning | Example Output |
|----------------|---------|---------------|
| `\n` | Newline (moves to the next line) | `Hello,\nWorld!` → `Hello, <br> World!` |
| `\t` | Tab space (adds horizontal spacing) | `Tab\tSpace` → `Tab    Space` |
| `\"` | Double quote (use inside a string) | `\"Hello\"` → `"Hello"` |
| `\\` | Backslash (prints `\` character) | `\\path\\to\\file` → `\path\to\file` |

#### Example: 
```c
printf("Hello,\nWorld!\n"); // Prints on two lines
printf("Tab\tSpace\n"); // Adds a tab space
```
:::info

- The `\n` escape sequence moves the cursor to a new line.

- The `\t` escape sequence inserts a tab space for indentation.

:::

## Character Inptu & Output using `getchar()` & `putchar()`
- `getchar()` is used to read a single character from standard input (keyboard).
- `putchar()` is used to display a single character on the screen.

#### Example:
```c
#include <stdio.h>
int main() {
    char ch;
    printf("Enter a character: ");
    ch = getchar(); // Reads a single character
    printf("You entered: ");
    putchar(ch); // Prints the character
    printf("\n");
    return 0;
}
```

:::info

- `getchar()` waits for the user to input a character and stores it in ch.

- `putchar()` prints the character stored in ch.

:::

## String Input and Output using `fgets()` and `puts()`
- `fgets()` is used to read a line of text (string) from standard input.
- `puts()` is used to print a string with an automatic newline at the end.

#### Example:
```c
#include <stdio.h>
int main() {
    char name[50];
    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin); // Reads a line of text
    printf("Hello, ");
    puts(name); // Prints the string with a newline
    return 0;
}
```

:::info

- `fgets()` reads a full line of input and prevents buffer overflow.

- `puts()` prints a string and automatically adds a newline.

:::
