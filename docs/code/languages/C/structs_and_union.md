---
title: Structures and Unions
id: structs_and_unions
sidebar_label: Structures and Unions
---

This document covers structures and unions in C.

Structures and unions are user-defined data types in C that allow grouping related variables under a single name. While structures store each member separately, unions share memory among members.

In this section, we will cover:
- Structures (struct) – Declaration, initialization, and usage.
- Nested structures and arrays of structures.
- Unions (union) – Memory sharing and key differences from structures.
- Practical use cases of structures and unions.
- Common pitfalls and best practices.

## What is a Structures (struct)
A structure groups different data types together.

### Declaring a Structure
```c
struct Person {
    char name[50];
    int age;
    float height;
};
```

### Defining and Initializing a Structure Variable
```c
struct Person person1 = {"Alice", 25, 5.7};
```

Alternatively, members can be assigned later:
```c
struct Person person2;
person2.age = 30;
strcpy(person2.name, "Bob");
person2.height = 6.1;
```

### Accessing Structure Members
```c
printf("Name: %s\n", person1.name);
printf("Age: %d\n", person1.age);
```

## Using `typedef` with Structures
`typedef` allows defining an alias for a structure.
```c
typedef struct {
    char name[50];
    int age;
} Person;

Person p1 = {"Charlie", 28};
printf("%s is %d years old\n", p1.name, p1.age);
```

## Arrays of Structures
Structures can be stored in arrays.
```c
struct Person people[2] = {
    {"Alice", 25, 5.7},
    {"Bob", 30, 6.1}
};
```
Iterating Over an Array of Structures
```c
for (int i = 0; i < 2; i++) {
    printf("%s is %d years old\n", people[i].name, people[i].age);
}
```

## Nested Structures
Structures can contain other structures.
```c
struct Address {
    char city[50];
    int zipCode;
};

struct Employee {
    char name[50];
    struct Address address;
};

struct Employee emp1 = {"John", {"New York", 10001}};
printf("%s lives in %s\n", emp1.name, emp1.address.city);
```

## Pointers to Structures
Using pointers makes structure handling more efficient.
```c
struct Person p1 = {"Alice", 25, 5.7};
struct Person *ptr = &p1;
printf("Name: %s\n", ptr->name);
```
:::info

`ptr->name` is shorthand for `(*ptr).name`.

:::

## Unions (union)

A union shares memory among all its members, meaning only one member can hold a value at a time.

### Declaring and Using a Union
```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 10;
printf("i: %d\n", d.i);
d.f = 3.14;
printf("f: %f\n", d.f);
printf("i after setting f: %d\n", d.i); // Overwritten!
```

:::warning

Since memory is shared, updating one member affects all others.

:::

## Differences Between Structures and Unions
| Feature      | Structure (`struct`)           | Union (`union`)          |
|-------------|------------------------------|--------------------------|
| **Memory Usage** | Each member gets separate memory | All members share the same memory |
| **Access**   | All members can hold values at the same time | Only one member holds a value at a time |
| **Use Cases** | Data records, objects with multiple fields | Memory-efficient storage for different types |


## Use Cases of Structures and Unions

###When to Use Structures

1. Representing entities like employees, students, cars, etc.
2. Storing multiple related attributes (e.g., name, age, salary).
3. Creating arrays of records (e.g., storing multiple employees).

### When to Use Unions

1. Optimizing memory usage for variables that do not need to exist simultaneously.
2. Handling variant data types (e.g., storing either int, float, or char[]).
3. Implementing low-level hardware registers in embedded systems.

## Common Pitfalls and Best Practices

### Using Unions Without Understanding Memory Overlap

#### Solution: 
Only store one value at a time in a union.

### Forgetting typedef for Readability

#### Solution: 
Use typedef to simplify structure usage.

### Dangling Pointers to Structures
#### Solution: 
Ensure pointers to structures are initialized correctly and not freed prematurely.