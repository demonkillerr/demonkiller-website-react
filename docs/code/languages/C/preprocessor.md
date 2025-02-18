---
title: C Preprocessor Directives
id: preprocessor
sidebar_label: C Preprocessors
---

This document covers preprocessor directives.

The C Preprocessor is a tool that processes the source code before compilation. Preprocessor directives start with # and do not end with a semicolon (;).

In this section, we will cover:
- Macro definitions (#define)
- Including files (#include)
- Conditional Compilation (#ifdef, #ifndef, #endif)
- Optimization and compiler-specific directives (#pragma)

## Macro Definitions (`#define` and `#undef`)

### Defining Constants

The `#define` directive is used to define constants and macros.
```c
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
```

:::info

- `PI` is replaced with 3.14159 during preprocessing.

- `SQUARE(x)` is an inline macro function.
:::

### Undefining a Macro (#undef)
To remove a macro definition, use #undef:
```c
#undef PI
```

## File Inclusion (#include)

The #include directive is used to include header files.

```c
#include <stdio.h>  // Standard Library Header
#include "myheader.h"  // User-defined Header
```

:::info

- Angle brackets (`<>`) search in standard system directories.
- Quotes (`""`) search in the current directory first.

:::

## Conditional Compilation (`#ifdef`, `#ifndef`, `#endif`)
Conditional compilation allows compiling specific parts of code based on macro definitions.

### Using #ifdef and #ifndef
```c
#define DEBUG
#ifdef DEBUG
    #define LOG(x) printf("Debug: %s\n", x)
#else
    #define LOG(x)
#endif
```

:::info

If DEBUG is defined, LOG(x) prints a debug message. Otherwise, LOG(x) does nothing.

:::

### Preventing Multiple Inclusions (#ifndef)
Header files should be wrapped with an inclusion guard:
```c
#ifndef MYHEADER_H
#define MYHEADER_H

void myFunction();

#endif // MYHEADER_H
```

:::info

Prevents multiple inclusion of the same file.

:::

## The `#pragma` Directive
`#pragma` provides compiler-specific instructions and optimizations.

### Disabling Warnings (#pragma warning)
```c
#pragma warning(disable: 4996)  // Disable specific warnings (MSVC only)
```

### Optimization (#pragma optimize)
```c
#pragma optimize("g", off)  // Disable global optimizations
```

This preprocessor directive is usefull for OpenMP-based parallel programming.