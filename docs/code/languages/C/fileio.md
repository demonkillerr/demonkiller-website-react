---
title: File operations in C
id: fileio
sidebar_label: Files I/O
---

This document covers File operations in C.

File I/O (Input/Output) in C allows reading and writing data to files, enabling data persistence beyond program execution. C provides a set of file handling functions in the stdio.h library to work with files efficiently.

In this section, we will cover:
- Standard I/O Streams (stdin, stdout, stderr).
- Opening, reading, writing, and closing files (fopen, fclose, etc.).
- Formatted file I/O (fprintf, fscanf).
- Binary file operations (fread, fwrite).
- Character-by-character file operations (fgetc, fputc).
- File error handling (perror, ferror, feof).
- Program exit functions (exit(), EXIT_SUCCESS, EXIT_FAILURE).

##  Standard I/O Streams: `stdin`, `stdout`, and `stderr`
| **Stream**  | **Purpose** | **Default Device** |
|------------|------------|--------------------|
| `stdin`   | Standard input stream  | Keyboard |
| `stdout`  | Standard output stream | Console (Screen) |
| `stderr`  | Standard error stream  | Console (Screen) |

## File Handling Functions in C
C provides several file handling functions for opening, reading, writing, and closing files.

### Opening a File (`fopen`)

The `fopen()` function is used to open a file and returns a pointer to a FILE structure.
```c
FILE *fp = fopen("example.txt", "r");
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}
```

:::tip

If the file cannot be opened, fopen() returns NULL. Always check the return value before using the file pointer.

:::

#### File Opening Modes
| **Mode**  | **Description** |
|----------|----------------|
| `"r"`  | Open for reading (file must exist) |
| `"w"`  | Open for writing (creates or truncates file) |
| `"a"`  | Open for appending (creates if non-existent) |
| `"r+"` | Open for both reading and writing |
| `"w+"` | Open for both reading and writing (truncates file) |
| `"a+"` | Open for both reading and appending |

### Closing a File (`fclose`)

The `fclose()` function closes an open file and releases system resources.

fclose(fp);

:::tip

Always close a file after use to prevent resource leaks. Ensure `fclose(fp)` is called only if fp is not NULL.

:::

## Reading and Writing to Files

### Writing to a File (fprintf, fputc, fputs)
```c
#include <stdio.h>
int main() {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }
    fprintf(fp, "Hello, File!\n");
    fputc('A', fp);
    fputs("Another line\n", fp);
    fclose(fp);
    return 0;
}
```

:::info

- `fprintf()` writes formatted data.
- `fputc()` writes a single character.
- `fputs()` writes a string.

:::

### Reading from a File (fscanf, fgetc, fgets)
```c
#include <stdio.h>
int main() {
    FILE *fp = fopen("output.txt", "r");
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }
    char line[100];
    while (fgets(line, sizeof(line), fp) != NULL) {  // Reads a line
        printf("Read: %s", line);
    }
    fclose(fp);
    return 0;
}
```

:::info

- `fscanf()` reads formatted input.
- `fgetc()` reads a single character.
- `fgets()` reads an entire line safely.

:::

## Checking End of File (`feof`)

`feof()` is used to check whether the end of a file has been reached.
```c
#include <stdio.h>
int main() {
    FILE *fp = fopen("output.txt", "r");
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }
    char ch;
    while ((ch = fgetc(fp)) != EOF) {
        putchar(ch);
    }
    if (feof(fp)) {
        printf("\nEnd of file reached.\n");
    }
    fclose(fp);
    return 0;
}
```
:::info

`feof(fp)` returns true when the end of the file is reached. `fgetc(fp) != EOF` ensures reading continues until EOF is reached.

:::

## File Error Handling (perror, ferror)

Error handling ensures robustness in file operations.
```c
FILE *fp = fopen("nonexistent.txt", "r");
if (fp == NULL) {
    perror("Error opening file");
} else {
    if (ferror(fp)) {
        printf("File error detected.\n");
    }
    fclose(fp);
}
```
:::info

`perror()` prints an error message. `ferror(fp)` checks if an error occurred while performing file operations.

:::

## Program Exit Functions (`exit`, `EXIT_SUCCESS`, `EXIT_FAILURE`)
Using `exit()` ensures controlled termination and provides meaningful exit codes to the operating system.

### The `exit()` Function

`exit(int status)` terminates the program immediately.
```c
#include <stdlib.h>
#include <stdio.h>
int main() {
    printf("Program is terminating.\n");
    exit(EXIT_SUCCESS);  // Terminates successfully
    return 0;  // This line will never execute
}
```

:::info

- `EXIT_SUCCESS` (usually `0`) indicates successful execution.
- `EXIT_FAILURE` (usually `1`) signals an error occurred.
- `exit()` ensures proper cleanup before termination.

:::

### Using exit() for Error Handling
```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp = fopen("nonexistent.txt", "r");
    if (fp == NULL) {
        perror("Error opening file");
        exit(EXIT_FAILURE);  // Terminates with failure
    }
    fclose(fp);
    return 0;
}
```

#### Why Use `exit()` instead of `return`?

`return` only exits the current function. `exit()` terminates the entire program immediately. It ensures that all open file handles are closed and buffers are flushed before exiting.

### Returning Exit Codes to the OS
You can return custom exit codes to the operating system to indicate different outcomes:

```c
int main() {
    return 2;  // OS can check this exit code
}
```

Custom exit codes can be used in shell scripts or batch files to determine program success or failure.