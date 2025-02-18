---
title: Control Flow
id: control_flow
sidebar_label: Control Flow
---

This document covers Control Flow in C.

Control flow determines the order in which statements are executed in a C program. C provides several control flow structures, including conditional statements and loops, to control the execution of code based on conditions or repetitions.

## Conditional Statements
Conditional statements allow a program to make decisions and execute different code blocks based on conditions.

### if-else Statement
The `if` statement executes a block of code only if a condition is true. The `else` statement executes if the if condition is false. If there a multiple conditions to be checked, then `else-if` can be used.

#### Example
```c
#include <stdio.h>
int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("The number is positive.\n");
    } else if (num < 0) {
        printf("The number is negative.\n");
    } else {
        printf("The number is zero.\n");
    }
    return 0;
}
```

:::info

The program checks if the number is positive, negative, or zero.

:::

### Switch Case Statement
The `switch` statement is used to evaluate a single expression and execute different blocks of code based on its value. Each case must end with a `break`; statement to prevent fall-through.

#### Example
```c
#include <stdio.h>
int main() {
    int day;
    printf("Enter a number (1-7) for a day of the week: ");
    scanf("%d", &day);

    switch (day) {
        case 1: printf("Monday\n"); break;
        case 2: printf("Tuesday\n"); break;
        case 3: printf("Wednesday\n"); break;
        case 4: printf("Thursday\n"); break;
        case 5: printf("Friday\n"); break;
        case 6: printf("Saturday\n"); break;
        case 7: printf("Sunday\n"); break;
        default: printf("Invalid input!\n");
    }
    return 0;
}
```

:::info

The program takes an integer input (1-7) and prints the corresponding weekday.

:::

## Loops in C
Loops allow repeating a block of code multiple times until a condition is met.

### For Loop
The `for` loop is used when the number of iterations is known beforehand.

#### Example
```c
#include <stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        printf("Iteration %d\n", i);
    }
    return 0;
}
```

:::info

The loop runs 5 times, printing the iteration number each time.

:::

### While Loop
The `while` loop executes as long as the condition remains true.

#### Example:

```c
#include <stdio.h>
int main() {
    int count = 1;
    while (count <= 5) {
        printf("Count: %d\n", count);
        count++;
    }
    return 0;
}
```

:::info

The loop increments count until it reaches 5.

:::


### Do-While Loop
The `do-while` loop guarantees at least one execution before checking the condition.

#### Example:
```c
#include <stdio.h>
int main() {
    int num;
    do {
        printf("Enter a positive number: ");
        scanf("%d", &num);
    } while (num <= 0);

    printf("You entered: %d\n", num);
    return 0;
}
```

:::info

This loop ensures the user must enter a positive number before proceeding.

:::

### Break and Continue Statements
- The break statement is used to exit a loop prematurely when a condition is met.

- The continue statement skips the rest of the current iteration and moves to the next.

#### Example using `break`
```c
#include <stdio.h>
int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break; // Stops the loop when i reaches 5
        }
        printf("%d ", i);
    }
    return 0;
}
```

#### Example using continue
```c
#include <stdio.h>
int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            continue; // Skips printing 5
        }
        printf("%d ", i);
    }
    return 0;
}
```

:::info

- `break` stops the loop completely when i == 5.

- `continue` skips i == 5 but continues the loop.

:::