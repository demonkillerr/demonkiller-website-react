"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[8641],{459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"code/languages/C/project_1","title":"Project 1 - Mini Shell in C","description":"In this document, we will build the first project - Mini Shell.","source":"@site/docs/code/languages/C/project-1.md","sourceDirName":"code/languages/C","slug":"/code/languages/C/project_1","permalink":"/docs/code/languages/C/project_1","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"demonkiller","lastUpdatedAt":1739855190000,"frontMatter":{"title":"Project 1 - Mini Shell in C","id":"project_1","sidebar_label":"Project 1"},"sidebar":"docs","previous":{"title":"Bit Manipulation","permalink":"/docs/code/languages/C/bit_manip"},"next":{"title":"Tools","permalink":"/docs/category/tools"}}');var l=r(4848),a=r(8453);const c={title:"Project 1 - Mini Shell in C",id:"project_1",sidebar_label:"Project 1"},t=void 0,s={},d=[{value:"Directory Structure:",id:"directory-structure",level:2},{value:"main.c",id:"mainc",level:2},{value:"parser.h &amp; parser.c",id:"parserh--parserc",level:2},{value:"parser.h",id:"parserh",level:3},{value:"parser.c",id:"parserc",level:3},{value:"executor.h &amp; executor.c",id:"executorh--executorc",level:2},{value:"executor.h",id:"executorh",level:3},{value:"executor.c",id:"executorc",level:3},{value:"signal_handler.h &amp; signal_handler.c",id:"signal_handlerh--signal_handlerc",level:2},{value:"signal_handler.h",id:"signal_handlerh",level:3},{value:"signal_handler.c",id:"signal_handlerc",level:3},{value:"Makefile",id:"makefile",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"In this document, we will build the first project - Mini Shell."}),"\n",(0,l.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"/mini-shell\n\u2502\u2500\u2500 main.c            # Entry point (loop for command input)\n\u2502\u2500\u2500 executor.h        # Function prototypes for executor.c\n\u2502\u2500\u2500 executor.c        # Executes commands using execvp()\n\u2502\u2500\u2500 parser.h          # Function prototypes for parser.c\n\u2502\u2500\u2500 parser.c          # Parses input into tokens\n\u2502\u2500\u2500 signal_handler.h  # Function prototypes for signal_handler.c\n\u2502\u2500\u2500 signal_handler.c  # Handles Ctrl+C (SIGINT)\n\u2502\u2500\u2500 Makefile          # Compiles the project\n"})}),"\n",(0,l.jsx)(n.h2,{id:"mainc",children:"main.c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'/* Mini-Shell Implementation */\n\n#include "executor.h"\n#include "parser.h"\n#include "signal_handler.h"\n\n#define MAX_INPUT 1024\n\nint main() {\n    char input[MAX_INPUT];\n    char *args[100];\n    signal(SIGINT, handle_sigint); // Handle Ctrl+C\n    \n    while (1) {\n        printf("mini-shell> ");\n        if (fgets(input, MAX_INPUT, stdin) == NULL) {\n            break;\n        }\n        \n        if (parse_input(input, args) > 0) {\n            execute_command(args);\n        }\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"parserh--parserc",children:"parser.h & parser.c"}),"\n",(0,l.jsx)(n.h3,{id:"parserh",children:"parser.h"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"/* parser.h */\n#ifndef PARSER_H\n#define PARSER_H\n\nint parse_input(char *input, char **args);\n\n#endif // PARSER_H\n"})}),"\n",(0,l.jsx)(n.h3,{id:"parserc",children:"parser.c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'/* parser.c */\n#include "parser.h"\n#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\n#define MAX_ARGS 100\n\nint parse_input(char *input, char **args) {\n    int count = 0;\n    char *token = strtok(input, " \\t\\n");\n    \n    while (token != NULL && count < MAX_ARGS - 1) {\n        args[count++] = token;\n        token = strtok(NULL, " \\t\\n");\n    }\n    args[count] = NULL;\n    \n    return count;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"executorh--executorc",children:"executor.h & executor.c"}),"\n",(0,l.jsx)(n.h3,{id:"executorh",children:"executor.h"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"/* executor.h */\n#ifndef EXECUTOR_H\n#define EXECUTOR_H\n\nvoid execute_command(char **args);\n\n#endif // EXECUTOR_H\n"})}),"\n",(0,l.jsx)(n.h3,{id:"executorc",children:"executor.c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'/* executor.c */\n#include "executor.h"\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n\nvoid execute_command(char **args) {\n    if (args[0] == NULL) {\n        return; // No command entered\n    }\n    \n    pid_t pid = fork();\n    if (pid < 0) {\n        perror("fork failed");\n    } else if (pid == 0) {\n        execvp(args[0], args);\n        perror("execvp failed");\n        exit(EXIT_FAILURE);\n    } else {\n        int status;\n        waitpid(pid, &status, 0); // Parent waits for child process to complete\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"signal_handlerh--signal_handlerc",children:"signal_handler.h & signal_handler.c"}),"\n",(0,l.jsx)(n.h3,{id:"signal_handlerh",children:"signal_handler.h"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"/* signal_handler.h */\n#ifndef SIGNAL_HANDLER_H\n#define SIGNAL_HANDLER_H\n\nvoid handle_sigint(int sig);\n\n#endif // SIGNAL_HANDLER_H\n"})}),"\n",(0,l.jsx)(n.h3,{id:"signal_handlerc",children:"signal_handler.c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'/* signal_handler.c */\n#include "signal_handler.h"\n#include <stdio.h>\n#include <signal.h>\n\nvoid handle_sigint(int sig) {\n    printf("\\nCaught signal %d (Ctrl+C), use \'exit\' to quit\\n", sig);\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"makefile",children:"Makefile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CC = gcc\nCFLAGS = -Wall -Wextra -std=c99\n\nall: mini-shell\n\nmini-shell: main.o parser.o executor.o signal_handler.o\n\t$(CC) $(CFLAGS) -o mini-shell main.o parser.o executor.o signal_handler.o\n\nmain.o: main.c parser.h executor.h signal_handler.h\n\t$(CC) $(CFLAGS) -c main.c\n\nparser.o: parser.c parser.h\n\t$(CC) $(CFLAGS) -c parser.c\n\nexecutor.o: executor.c executor.h\n\t$(CC) $(CFLAGS) -c executor.c\n\nsignal_handler.o: signal_handler.c signal_handler.h\n\t$(CC) $(CFLAGS) -c signal_handler.c\n\nclean:\n\trm -f *.o mini-shell\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var i=r(6540);const l={},a=i.createContext(l);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);