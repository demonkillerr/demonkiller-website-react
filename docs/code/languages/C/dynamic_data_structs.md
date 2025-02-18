---
title: Dynamic Data Structures in C
id: dynamic_data_structures
sidebar_label: Dynamic Data Structures
---

This document covers Dynamic Data Structures in C.

Dynamic data structures allow efficient memory management and flexibility in handling data. Unlike static arrays, these structures can grow or shrink dynamically at runtime using pointers and dynamic memory allocation (malloc, free).

In this section, we will cover:
- Linked Lists (Singly, Doubly, Circular)
- Stacks & Queues (Using Linked Lists and Arrays)
- Binary Trees (Basics, Insertion, Traversal)
- Memory Management with malloc and free

## Linked Lists
A linked list consists of nodes, where each node contains data and a pointer to the next node.

### Structure of a Node
```c
struct Node {
    int data;
    struct Node *next;
};
```

### Singly Linked List Operations

#### Insertion at the Beginning
```c
#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node* next;
};
void insertAtBeginning(struct Node** head, int newData) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = newData;
    newNode->next = *head;
    *head = newNode;
}
```
:::info

Uses malloc() to dynamically allocate memory for new nodes.

:::

#### Deletion from the Beginning
```c
void deleteAtBeginning(struct Node** head) {
    if (*head == NULL) return;
    struct Node* temp = *head;
    *head = (*head)->next;
    free(temp);
}
```

:::info

Uses free() to deallocate memory, preventing memory leaks.

:::

### Doubly Linked List (With prev Pointer)
A doubly linked list allows traversal in both directions.

```c
struct DNode {
    int data;
    struct DNode *prev, *next;
};
```

:::tip

Advantage: Easier to traverse backward compared to singly linked lists.

:::

## Stacks & Queues
Stacks and queues are fundamental abstract data types (ADTs) used for managing ordered data.

### Stack (LIFO - Last In First Out)

#### Using a Linked List
```c
struct StackNode {
    int data;
    struct StackNode* next;
};
```
:::info

- Push (Insert at top)
- Pop (Remove from top)

:::

:::tip

Used in: Function calls (recursion), expression evaluation, undo operations.

:::

#### Using an Array
```c
#define MAX 100
struct Stack {
    int top;
    int arr[MAX];
};
```
:::info

Advantage: Faster access but fixed size.

:::

### Queue (FIFO - First In First Out)

#### Using a Linked List
```c
struct QueueNode {
    int data;
    struct QueueNode* next;
};
```
:::info

- Enqueue (Insert at rear)
- Dequeue (Remove from front)

:::

:::tip

Used in: Scheduling (CPU, Printer), Buffering.

:::

#### Using a Circular Array
```c
#define SIZE 10
struct Queue {
    int front, rear;
    int arr[SIZE];
};
```
:::info

Advantage: Avoids shifting elements.

:::

## Binary Trees
A binary tree is a hierarchical structure where each node has at most two children.

### Structure of a Binary Tree Node

```c
struct TreeNode {
    int data;
    struct TreeNode *left, *right;
};
```

### Insertion into a Binary Tree
```c
#include <stdio.h>
#include <stdlib.h>
struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};
struct TreeNode* insertNode(struct TreeNode* root, int value) {
    if (root == NULL) {
        root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        root->data = value;
        root->left = root->right = NULL;
    } else if (value < root->data) {
        root->left = insertNode(root->left, value);
    } else {
        root->right = insertNode(root->right, value);
    }
    return root;
}
```
:::info

Key Points: Uses recursion for insertion, dynamically allocates nodes.

:::