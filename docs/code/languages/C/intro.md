---
title: C Programming Language Tutorial
id: intro
sidebar_label: Introduction
---

This document covers the overview of this reference material.

C is one of the most fundamental programming languages, widely used in systems programming, high-performance computing (HPC), and embedded systems. Despite its age, C remains relevant because of its efficiency, portability, and fine-grained control over hardware.

### Why Learn C?

- Performance: C provides low-level memory control, making it ideal for high-performance applications.
- Portability: C code can run on almost any platform with minimal modification.
- Concurrency & Parallelism: Many HPC applications use MPI (Message Passing Interface), which is implemented in C.
- Used in OS Development: Most operating systems, including Linux, are written in C.


## Reference Overview
This reference is meant to build a strong foundation in C, focusing on topics relevant for HPC and MPI programming. The course emphasizes:

### Key Topics Covered:

1. Functions and Modular Programming
    - Function prototypes, pass by value vs. pass by reference, and function pointers.

2. Pointers & Memory Management
    - Pointer arithmetic, dynamic memory allocation (malloc, free), and double pointers.

3. Multi-File Code Structure
    - Using header (.h) files, separate compilation, and best practices for modular C programming.

4. Build Systems: Makefile
    - Automating compilation using make to manage multi-file C projects.

5. Debugging & Best Practices
    - Tools like gdb and valgrind, and tips to avoid common pitfalls.

6. Mini Project
    - Implementing a simple matrix operations program using modular C code.

### Who Is This For?

This tutorial is for:

- Beginners who want to learn C beyond basic syntax.
- Students and Developers preparing for MPI programming.
- HPC enthusiasts looking to understand how C is used in high-performance applications.

### What’s Next?

This tutorial will be followed by an MPI Programming tutorial, where we’ll dive into:
- Basics of MPI (Message Passing Interface)
- Writing parallel programs in C using MPI
- Real-world examples of distributed computing