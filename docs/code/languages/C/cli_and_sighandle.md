---
title: Command-Line Arguments & Signal Handling in C
id: cli_and_sighandle
sidebar_label: CLI & Signal Handling
---

This document covers Command-Line Arguments & Signal Handling in C.

Command-line arguments allow users to pass input values when executing a program. Signal handling enables programs to respond to system signals such as Ctrl+C (SIGINT) or termination signals (SIGTERM).

In this section, we will cover:
- Command-Line Arguments (argc, argv[])
- Handling Multiple Arguments
- Converting String Inputs to Numbers (atoi, strtol)
- Signal Handling (signal.h, SIGINT, SIGTERM)
- Catching and Ignoring Signals
- Graceful Termination of a Program

## Command-Line Arguments (`argc, argv[]`)
Command-line arguments allow passing values when running a program from the terminal.

### Understanding `argc` and `argv[]`
### **Understanding `argc` and `argv[]`**
| **Argument** | **Description** |
|-------------|----------------|
| `argc` | Argument count (number of command-line arguments) |
| `argv[]` | Argument vector (array of argument strings) |

### Basic Command-Line Argument Handling
```c
#include <stdio.h>
int main(int argc, char *argv[]) {
    printf("Argument count: %d\n", argc);
    for (int i = 0; i < argc; i++) {
        printf("Argument %d: %s\n", i, argv[i]);
    }
    return 0;
}
```

#### Example Run:
```bash
./program hello world
```

#### Output:
```
Argument count: 3
Argument 0: ./program
Argument 1: hello
Argument 2: world
```

:::info

`argv[0]` is always the program name. Arguments are passed as strings.

:::

### Converting Arguments to Integers (`atoi`, `strtol`)
Command-line arguments are always strings. Convert them to numbers using:

```c
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s <num1> <num2>\n", argv[0]);
        return 1;
    }
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    printf("Sum: %d\n", num1 + num2);
    return 0;
}
```

:::info

`atoi()` converts a string to an integer (use `strtol()` for better error handling). Always validate arguments before conversion.

:::

## Signal Handling in C (`signal.h`)
Signals allow communication between processes and the OS. Programs can handle signals like SIGINT (Ctrl+C) and SIGTERM (termination request).

### Catching SIGINT (Ctrl+C)
```c
#include <stdio.h>
#include <signal.h>
void handle_sigint(int sig) {
    printf("Caught signal %d (Ctrl+C), exiting safely...\n", sig);
}
int main() {
    signal(SIGINT, handle_sigint);
    while (1) {
        printf("Running... Press Ctrl+C to exit.\n");
        sleep(2);
    }
    return 0;
}
```

:::info

- `signal(SIGINT, handle_sigint);` registers the signal handler.
- Prevents abrupt termination, allowing cleanup before exit.

:::

### Ignoring a Signal (`SIGINT`, `SIGTERM`)

```c
#include <stdio.h>
#include <signal.h>
int main() {
    signal(SIGINT, SIG_IGN);  // Ignore Ctrl+C
    while (1) {
        printf("You cannot stop me with Ctrl+C!\n");
        sleep(2);
    }
    return 0;
}
```

:::tip

Use Case: Prevents unintended termination of critical processes.

:::

### Graceful Termination (`SIGTERM`)
A program can handle termination requests (SIGTERM) and perform cleanup.

```c
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
void handle_sigterm(int sig) {
    printf("Received termination signal %d. Cleaning up...\n", sig);
    exit(0);
}
int main() {
    signal(SIGTERM, handle_sigterm);
    while (1) {
        printf("Running... Send SIGTERM to stop.\n");
        sleep(2);
    }
    return 0;
}
```

:::tip

Use Case: Servers, background processes, and daemons should clean up resources before exiting.

:::