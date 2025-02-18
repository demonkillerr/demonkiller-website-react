---
title: Strings in C
id: strings
sidebar_label: Strings
---

This document covers strings in C.

In C, a string is an array of characters terminated by a null character (\0). Unlike other languages, C does not have a built-in string type, so handling strings requires using character arrays and pointers.

In this section, we will cover:
- Declaring and initializing strings.
- String input and output.
- Common string operations.
- Using string functions from `<string.h>`.
- String manipulation using pointers.
- Common pitfalls and best practices.

## Declaring and Initializing Strings

### Using Character Arrays
```c
char str1[] = "Hello";  // Implicit null character added
char str2[6] = "Hello";  // Explicitly defining size (5 characters + '\0')
char str3[6] = {'H', 'e', 'l', 'l', 'o', '\0'};  // Manually adding null character
```

### Using Pointers
```c
char *str = "Hello";  // Pointer to string literal (stored in read-only memory)
printf("%s\n", str);
```

:::danger

Modifying *str (string literal) leads to undefined behavior!

:::

## Input and Output with Strings

### Using `scanf()` and `printf()`
```c
#include <stdio.h>
int main() {
    char name[50];
    printf("Enter your name: ");
    scanf("%s", name);  // Reads a single word only
    printf("Hello, %s!\n", name);
    return 0;
}
```

:::warning 

`scanf()` cannot read spaces; it stops at the first whitespace.

:::

### Using `fgets()`
```c
#include <stdio.h>
int main() {
    char name[50];
    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin);  // Reads a full line, including spaces
    printf("Hello, %s\n", name);
    return 0;
}
```
:::tip

fgets() is safer because it prevents buffer overflow.

:::

## Common String Operations (`<string.h>`)

C provides several functions for string manipulation in `<string.h>`.

### Finding String Length (strlen)
```c
#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "Hello";
    printf("Length: %lu\n", strlen(str));
    return 0;
}
```

### Copying a String (strcpy and strncpy)
```c
char src[] = "Hello";
char dest[10];
strcpy(dest, src);  // Copies "Hello" into dest
```
:::tip

Use strncpy() for safer copying with size limits.

:::

```c
strncpy(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\0';  // Ensures null termination
```

### Concatenating Strings (strcat and strncat)
```c
char str1[20] = "Hello ";
char str2[] = "World!";
strcat(str1, str2);  // Appends str2 to str1
```
:::tip

Use strncat() for safer concatenation.

:::
```c
strncat(str1, str2, sizeof(str1) - strlen(str1) - 1);
```

### Comparing Strings (strcmp)
```c
if (strcmp("hello", "Hello") == 0) {
    printf("Strings are equal\n");
} else {
    printf("Strings are not equal\n");
}
```
:::tip 

Use strcasecmp() for case-insensitive comparison.

:::

### Finding Substrings (strstr)
```c
char *result = strstr("hello world", "world");
if (result) {
    printf("Substring found at position: %ld\n", result - "hello world");
}
```

## String Manipulation Using Pointers
Strings can be manipulated directly using pointers.

### Iterating Over a String Using Pointers
```c
char str[] = "Hello";
char *ptr = str;
while (*ptr != '\0') {
    printf("%c ", *ptr);
    ptr++;
}
```

### Modifying Strings with Pointers
```c
char str[] = "Hello";
char *ptr = str;
ptr[1] = 'a';  // Modifies "Hello" to "Hallo"
```
:::warning

Cannot modify string literals this way!

:::

## Common Pitfalls and Best Practices

### Buffer Overflow
```c
char name[5];
scanf("%s", name);  // Unsafe! Can exceed buffer size.
```

#### Solution: 
Use fgets() instead of scanf().

### Forgetting Null Termination
```c
char str[5] = {'H', 'e', 'l', 'l', 'o'};  // Missing `\0`
printf("%s", str);  // Undefined behavior!
```

#### Solution: 
Always add `\0` manually or use a string literal.

### Using `strcpy()` without checking buffer size
```c
char dest[5];
strcpy(dest, "Too long");  // Buffer overflow risk!
```

#### Solution: 
Use `strncpy()` and ensure null termination.