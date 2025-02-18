---
title: Project 1 - Mini Shell in C
id: project_1
sidebar_label: Project 1
---

In this document, we will build the first project - Mini Shell.

## Directory Structure:
```bash
/mini-shell
│── main.c            # Entry point (loop for command input)
│── executor.h        # Function prototypes for executor.c
│── executor.c        # Executes commands using execvp()
│── parser.h          # Function prototypes for parser.c
│── parser.c          # Parses input into tokens
│── signal_handler.h  # Function prototypes for signal_handler.c
│── signal_handler.c  # Handles Ctrl+C (SIGINT)
│── Makefile          # Compiles the project
```

## main.c
```c
/* Mini-Shell Implementation */

#include "executor.h"
#include "parser.h"
#include "signal_handler.h"

#define MAX_INPUT 1024

int main() {
    char input[MAX_INPUT];
    char *args[100];
    signal(SIGINT, handle_sigint); // Handle Ctrl+C
    
    while (1) {
        printf("mini-shell> ");
        if (fgets(input, MAX_INPUT, stdin) == NULL) {
            break;
        }
        
        if (parse_input(input, args) > 0) {
            execute_command(args);
        }
    }
    return 0;
}
```

## parser.h & parser.c
### parser.h
```c
/* parser.h */
#ifndef PARSER_H
#define PARSER_H

int parse_input(char *input, char **args);

#endif // PARSER_H
```
### parser.c
```c
/* parser.c */
#include "parser.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_ARGS 100

int parse_input(char *input, char **args) {
    int count = 0;
    char *token = strtok(input, " \t\n");
    
    while (token != NULL && count < MAX_ARGS - 1) {
        args[count++] = token;
        token = strtok(NULL, " \t\n");
    }
    args[count] = NULL;
    
    return count;
}
```

## executor.h & executor.c
### executor.h
```c
/* executor.h */
#ifndef EXECUTOR_H
#define EXECUTOR_H

void execute_command(char **args);

#endif // EXECUTOR_H
```

### executor.c
```c
/* executor.c */
#include "executor.h"
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

void execute_command(char **args) {
    if (args[0] == NULL) {
        return; // No command entered
    }
    
    pid_t pid = fork();
    if (pid < 0) {
        perror("fork failed");
    } else if (pid == 0) {
        execvp(args[0], args);
        perror("execvp failed");
        exit(EXIT_FAILURE);
    } else {
        int status;
        waitpid(pid, &status, 0); // Parent waits for child process to complete
    }
}
```

## signal_handler.h & signal_handler.c
### signal_handler.h
```c
/* signal_handler.h */
#ifndef SIGNAL_HANDLER_H
#define SIGNAL_HANDLER_H

void handle_sigint(int sig);

#endif // SIGNAL_HANDLER_H
```

### signal_handler.c
```c
/* signal_handler.c */
#include "signal_handler.h"
#include <stdio.h>
#include <signal.h>

void handle_sigint(int sig) {
    printf("\nCaught signal %d (Ctrl+C), use 'exit' to quit\n", sig);
}
```

## Makefile
```
CC = gcc
CFLAGS = -Wall -Wextra -std=c99

all: mini-shell

mini-shell: main.o parser.o executor.o signal_handler.o
	$(CC) $(CFLAGS) -o mini-shell main.o parser.o executor.o signal_handler.o

main.o: main.c parser.h executor.h signal_handler.h
	$(CC) $(CFLAGS) -c main.c

parser.o: parser.c parser.h
	$(CC) $(CFLAGS) -c parser.c

executor.o: executor.c executor.h
	$(CC) $(CFLAGS) -c executor.c

signal_handler.o: signal_handler.c signal_handler.h
	$(CC) $(CFLAGS) -c signal_handler.c

clean:
	rm -f *.o mini-shell
```