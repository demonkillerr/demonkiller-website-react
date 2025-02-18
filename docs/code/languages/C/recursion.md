---
title: Recursive Functions
id: recursion
sidebar_label: Recursion
---

This document covers recursion in C.

Recursion is a powerful concept in programming where a function calls itself to solve a problem. In C, recursion is used for problems that can be broken down into smaller subproblems, making the code more elegant and easier to understand.

In this section, we will cover:
- What recursion is and how it works.
- Base case and recursive case.
- Examples of recursion (Factorial, Fibonacci, and Binary Search).
- Pros and cons of recursion.
- Common pitfalls, including stack overflow.

## How Recursion Works
A recursive function is a function that calls itself with modified parameters until a stopping condition (base case) is met.

### Structure of a Recursive Function

A recursive function consists of two parts:

1. Base Case – Defines when the recursion should stop.
2. Recursive Case – Calls itself with modified arguments.

#### Example
```c
#include <stdio.h>
void countdown(int n) {
    if (n == 0) { // Base case
        printf("Blast off!\n");
        return;
    }
    printf("%d\n", n);
    countdown(n - 1); // Recursive call
}

int main() {
    countdown(5);
    return 0;
}
```
:::info

- Base case: Stops when n == 0.

- Recursive case: Calls countdown(n - 1).

:::

## Examples of Recursive Functions

### Factorial Calculation
Factorial of n is defined as n! = n × (n-1)!

```c
#include <stdio.h>
int factorial(int n) {
    if (n == 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\n", num, factorial(num));
    return 0;
}
```

### Fibonacci Series

Each Fibonacci number is the sum of the two preceding numbers.

```c
#include <stdio.h>
int fibonacci(int n) {
    if (n == 0) return 0; // Base case
    if (n == 1) return 1; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

int main() {
    int num = 6;
    printf("Fibonacci(%d) = %d\n", num, fibonacci(num));
    return 0;
}
```

### Binary Search (Recursive Implementation)
Binary search efficiently finds an element in a sorted array by repeatedly dividing the search range in half.

```c
#include <stdio.h>
int binarySearch(int arr[], int low, int high, int key) {
    if (low > high) return -1; // Base case: Element not found
    
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) return mid;
    else if (arr[mid] > key) return binarySearch(arr, low, mid - 1, key);
    else return binarySearch(arr, mid + 1, high, key);
}

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11};
    int size = sizeof(arr) / sizeof(arr[0]);
    int key = 5;
    int index = binarySearch(arr, 0, size - 1, key);
    if (index != -1) printf("Element found at index %d\n", index);
    else printf("Element not found\n");
    return 0;
}
```

## Advantages and Disadvantages of Recursion

### Advantages

1. Makes complex problems easier to understand.
2. Reduces code duplication by using a cleaner, more modular approach.
3. Natural fit for problems that can be broken down into smaller subproblems.

### Disadvantages

1. Recursion can be inefficient due to repeated function calls.
2. May cause stack overflow if the recursion depth is too large.
3. Uses more memory compared to iteration.

## Common Pitfalls and Stack Overflow
### Missing Base Case
If a recursive function does not have a proper base case, it will continue calling itself indefinitely, causing a stack overflow.

```c
void infiniteRecursion() {
    printf("This will never stop!\n");
    infiniteRecursion(); // No base case!
}
```

##### Solution
Always define a base case to stop recursion.

### Excessive Function Calls (Inefficient Recursion)

Some recursive functions, like the naive Fibonacci implementation, recompute values multiple times.