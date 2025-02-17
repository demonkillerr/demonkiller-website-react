---
title: Dynamic Memory Allocation in C
id: dynamic_mem_alloc
sidebar_label: Dynamic Memory
---

This document covers Dynamic Memory Allocation in C.

C provides powerful memory management capabilities through dynamic memory allocation, allowing programs to allocate and free memory at runtime. Unlike static memory allocation, where memory size is fixed at compile time, dynamic allocation allows flexible memory management.

In this section, we will cover:
- Difference Between Stack and Heap Memory
- When to Use Dynamic Allocation vs. Static Allocation
- Memory Allocation Functions (malloc, calloc, realloc, free)
- Best Practices for Memory Management
- Common Heap Memory Issues (Memory Leaks, Dangling Pointers, etc.)
- Debugging Tools for Heap Memory Management

## Stack vs. Heap Memory
### Stack Memory
- Automatically managed by the compiler.
- Used for local variables and function calls.
- Limited size (stack overflow if exceeded).
- Fast allocation/deallocation.

#### Example
```c
void func() {
    int x = 10; // Allocated on the stack
}
```

### Heap Memory
- Manually managed by the programmer using malloc, calloc, realloc, and free.
- Used for dynamic memory allocation.
- Larger space but slower access than stack.
- Must be freed manually, or memory leaks occur.

#### Example:
```c
#include <stdlib.h>
int main() {
    int *ptr = (int *)malloc(sizeof(int)); // Allocated on the heap
    free(ptr); // Must be freed
    return 0;
}
```

### When to Use Dynamic vs. Static Allocation
### **2.3 When to Use Dynamic vs. Static Allocation**
| Feature         | Stack (Static Allocation) | Heap (Dynamic Allocation) |
|----------------|----------------|----------------|
| Memory Size    | Fixed at compile-time | Flexible, allocated at runtime |
| Management     | Automatic | Manual (`malloc/free`) |
| Speed         | Faster | Slower |
| Use Case      | Local variables, function calls | Large data structures, variable-sized memory |


## Memory Allocation Functions
### malloc() – Allocates Memory Without Initialization
- Allocates uninitialized memory on the heap.
- Returns a pointer to the allocated memory.
- Must be explicitly freed using free().

```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int *ptr = (int *)malloc(5 * sizeof(int));
    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }
    ptr[0] = 42; // Assigning value
    free(ptr); // Freeing memory
    return 0;
}
```

### calloc() – Allocates and Initializes Memory to Zero

`calloc` initializes all elements to zero.

```c
int *arr = (int *)calloc(5, sizeof(int));
```

:::info

`calloc(n, size)` allocates n elements of size bytes each and initializes them to zero.

:::

### realloc() – Resizing Allocated Memory
Expands or shrinks an allocated block dynamically.

```c
arr = (int *)realloc(arr, 10 * sizeof(int));
```

:::info

`realloc(ptr, new_size)` resizes previously allocated memory.

:::

### free() – Deallocates Memory
- Releases memory back to the system.
- Avoids memory leaks.

```c
free(arr);
arr = NULL; // Prevents dangling pointer
```

## Best Practices for Memory Management

1. Always check if `malloc` or `calloc` returns NULL (allocation failure).
2. Always free allocated memory once it's no longer needed.
3. Use `realloc()` cautiously – if it returns NULL, old memory is lost.
4. Set pointers to NULL after `free()` to prevent dangling pointers.

## Common Heap Memory Issues

### Memory Leaks

- Cause: Forgetting to free allocated memory.
- Solution: Always call free() when done using memory.
```c
int *ptr = (int *)malloc(sizeof(int));
// Forgot to free(ptr); -> Memory leak!
```

### Dangling Pointers

- Cause: Using memory after freeing it.
- Solution: Set pointer to NULL after free().
```c
free(ptr);
printf("%d", *ptr); // Undefined behavior!
```

### Double Free

- Cause: Calling free() twice on the same memory.
- Solution: Set pointer to NULL after freeing.
```c
free(ptr);
free(ptr); // ERROR: Double free!
```

### Buffer Overflows

- Cause: Writing beyond allocated memory.
- Solution: Always allocate sufficient memory.
```c
int *arr = (int *)malloc(5 * sizeof(int));
arr[6] = 42; // ERROR: Out of bounds
```

## Debugging Tools for Memory Management
### Using valgrind (Linux)

Detects memory leaks and invalid memory accesses.
```bash
valgrind --leak-check=full ./a.out
```

### Using Address Sanitizer (GCC/Clang)
Compile with:
```bash
gcc -fsanitize=address -g program.c -o program
```