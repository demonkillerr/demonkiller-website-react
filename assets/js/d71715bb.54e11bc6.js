"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[4114],{5783:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"code/languages/C/fileio","title":"File operations in C","description":"This document covers File operations in C.","source":"@site/docs/code/languages/C/fileio.md","sourceDirName":"code/languages/C","slug":"/code/languages/C/fileio","permalink":"/docs/code/languages/C/fileio","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"demonkiller","lastUpdatedAt":1739850916000,"frontMatter":{"title":"File operations in C","id":"fileio","sidebar_label":"Files I/O"},"sidebar":"docs","previous":{"title":"Modular Programming","permalink":"/docs/code/languages/C/modular"},"next":{"title":"Dynamic Data Structures","permalink":"/docs/code/languages/C/dynamic_data_structures"}}');var s=i(4848),t=i(8453);const d={title:"File operations in C",id:"fileio",sidebar_label:"Files I/O"},l=void 0,o={},c=[{value:"Standard I/O Streams: <code>stdin</code>, <code>stdout</code>, and <code>stderr</code>",id:"standard-io-streams-stdin-stdout-and-stderr",level:2},{value:"File Handling Functions in C",id:"file-handling-functions-in-c",level:2},{value:"Opening a File (<code>fopen</code>)",id:"opening-a-file-fopen",level:3},{value:"File Opening Modes",id:"file-opening-modes",level:4},{value:"Closing a File (<code>fclose</code>)",id:"closing-a-file-fclose",level:3},{value:"Reading and Writing to Files",id:"reading-and-writing-to-files",level:2},{value:"Writing to a File (fprintf, fputc, fputs)",id:"writing-to-a-file-fprintf-fputc-fputs",level:3},{value:"Reading from a File (fscanf, fgetc, fgets)",id:"reading-from-a-file-fscanf-fgetc-fgets",level:3},{value:"Checking End of File (<code>feof</code>)",id:"checking-end-of-file-feof",level:2},{value:"File Error Handling (perror, ferror)",id:"file-error-handling-perror-ferror",level:2},{value:"Program Exit Functions (<code>exit</code>, <code>EXIT_SUCCESS</code>, <code>EXIT_FAILURE</code>)",id:"program-exit-functions-exit-exit_success-exit_failure",level:2},{value:"The <code>exit()</code> Function",id:"the-exit-function",level:3},{value:"Using exit() for Error Handling",id:"using-exit-for-error-handling",level:3},{value:"Why Use <code>exit()</code> instead of <code>return</code>?",id:"why-use-exit-instead-of-return",level:4},{value:"Returning Exit Codes to the OS",id:"returning-exit-codes-to-the-os",level:3}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document covers File operations in C."}),"\n",(0,s.jsx)(n.p,{children:"File I/O (Input/Output) in C allows reading and writing data to files, enabling data persistence beyond program execution. C provides a set of file handling functions in the stdio.h library to work with files efficiently."}),"\n",(0,s.jsx)(n.p,{children:"In this section, we will cover:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Standard I/O Streams (stdin, stdout, stderr)."}),"\n",(0,s.jsx)(n.li,{children:"Opening, reading, writing, and closing files (fopen, fclose, etc.)."}),"\n",(0,s.jsx)(n.li,{children:"Formatted file I/O (fprintf, fscanf)."}),"\n",(0,s.jsx)(n.li,{children:"Binary file operations (fread, fwrite)."}),"\n",(0,s.jsx)(n.li,{children:"Character-by-character file operations (fgetc, fputc)."}),"\n",(0,s.jsx)(n.li,{children:"File error handling (perror, ferror, feof)."}),"\n",(0,s.jsx)(n.li,{children:"Program exit functions (exit(), EXIT_SUCCESS, EXIT_FAILURE)."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"standard-io-streams-stdin-stdout-and-stderr",children:["Standard I/O Streams: ",(0,s.jsx)(n.code,{children:"stdin"}),", ",(0,s.jsx)(n.code,{children:"stdout"}),", and ",(0,s.jsx)(n.code,{children:"stderr"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Stream"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Purpose"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Default Device"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stdin"})}),(0,s.jsx)(n.td,{children:"Standard input stream"}),(0,s.jsx)(n.td,{children:"Keyboard"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stdout"})}),(0,s.jsx)(n.td,{children:"Standard output stream"}),(0,s.jsx)(n.td,{children:"Console (Screen)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stderr"})}),(0,s.jsx)(n.td,{children:"Standard error stream"}),(0,s.jsx)(n.td,{children:"Console (Screen)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"file-handling-functions-in-c",children:"File Handling Functions in C"}),"\n",(0,s.jsx)(n.p,{children:"C provides several file handling functions for opening, reading, writing, and closing files."}),"\n",(0,s.jsxs)(n.h3,{id:"opening-a-file-fopen",children:["Opening a File (",(0,s.jsx)(n.code,{children:"fopen"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fopen()"})," function is used to open a file and returns a pointer to a FILE structure."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'FILE *fp = fopen("example.txt", "r");\nif (fp == NULL) {\n    perror("Error opening file");\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If the file cannot be opened, fopen() returns NULL. Always check the return value before using the file pointer."})}),"\n",(0,s.jsx)(n.h4,{id:"file-opening-modes",children:"File Opening Modes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Mode"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"r"'})}),(0,s.jsx)(n.td,{children:"Open for reading (file must exist)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"w"'})}),(0,s.jsx)(n.td,{children:"Open for writing (creates or truncates file)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"a"'})}),(0,s.jsx)(n.td,{children:"Open for appending (creates if non-existent)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"r+"'})}),(0,s.jsx)(n.td,{children:"Open for both reading and writing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"w+"'})}),(0,s.jsx)(n.td,{children:"Open for both reading and writing (truncates file)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"a+"'})}),(0,s.jsx)(n.td,{children:"Open for both reading and appending"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"closing-a-file-fclose",children:["Closing a File (",(0,s.jsx)(n.code,{children:"fclose"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fclose()"})," function closes an open file and releases system resources."]}),"\n",(0,s.jsx)(n.p,{children:"fclose(fp);"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Always close a file after use to prevent resource leaks. Ensure ",(0,s.jsx)(n.code,{children:"fclose(fp)"})," is called only if fp is not NULL."]})}),"\n",(0,s.jsx)(n.h2,{id:"reading-and-writing-to-files",children:"Reading and Writing to Files"}),"\n",(0,s.jsx)(n.h3,{id:"writing-to-a-file-fprintf-fputc-fputs",children:"Writing to a File (fprintf, fputc, fputs)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\nint main() {\n    FILE *fp = fopen("output.txt", "w");\n    if (fp == NULL) {\n        perror("Error opening file");\n        return 1;\n    }\n    fprintf(fp, "Hello, File!\\n");\n    fputc(\'A\', fp);\n    fputs("Another line\\n", fp);\n    fclose(fp);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fprintf()"})," writes formatted data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fputc()"})," writes a single character."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fputs()"})," writes a string."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"reading-from-a-file-fscanf-fgetc-fgets",children:"Reading from a File (fscanf, fgetc, fgets)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\nint main() {\n    FILE *fp = fopen("output.txt", "r");\n    if (fp == NULL) {\n        perror("Error opening file");\n        return 1;\n    }\n    char line[100];\n    while (fgets(line, sizeof(line), fp) != NULL) {  // Reads a line\n        printf("Read: %s", line);\n    }\n    fclose(fp);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fscanf()"})," reads formatted input."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fgetc()"})," reads a single character."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fgets()"})," reads an entire line safely."]}),"\n"]})}),"\n",(0,s.jsxs)(n.h2,{id:"checking-end-of-file-feof",children:["Checking End of File (",(0,s.jsx)(n.code,{children:"feof"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"feof()"})," is used to check whether the end of a file has been reached."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\nint main() {\n    FILE *fp = fopen("output.txt", "r");\n    if (fp == NULL) {\n        perror("Error opening file");\n        return 1;\n    }\n    char ch;\n    while ((ch = fgetc(fp)) != EOF) {\n        putchar(ch);\n    }\n    if (feof(fp)) {\n        printf("\\nEnd of file reached.\\n");\n    }\n    fclose(fp);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"feof(fp)"})," returns true when the end of the file is reached. ",(0,s.jsx)(n.code,{children:"fgetc(fp) != EOF"})," ensures reading continues until EOF is reached."]})}),"\n",(0,s.jsx)(n.h2,{id:"file-error-handling-perror-ferror",children:"File Error Handling (perror, ferror)"}),"\n",(0,s.jsx)(n.p,{children:"Error handling ensures robustness in file operations."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'FILE *fp = fopen("nonexistent.txt", "r");\nif (fp == NULL) {\n    perror("Error opening file");\n} else {\n    if (ferror(fp)) {\n        printf("File error detected.\\n");\n    }\n    fclose(fp);\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"perror()"})," prints an error message. ",(0,s.jsx)(n.code,{children:"ferror(fp)"})," checks if an error occurred while performing file operations."]})}),"\n",(0,s.jsxs)(n.h2,{id:"program-exit-functions-exit-exit_success-exit_failure",children:["Program Exit Functions (",(0,s.jsx)(n.code,{children:"exit"}),", ",(0,s.jsx)(n.code,{children:"EXIT_SUCCESS"}),", ",(0,s.jsx)(n.code,{children:"EXIT_FAILURE"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"exit()"})," ensures controlled termination and provides meaningful exit codes to the operating system."]}),"\n",(0,s.jsxs)(n.h3,{id:"the-exit-function",children:["The ",(0,s.jsx)(n.code,{children:"exit()"})," Function"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"exit(int status)"})," terminates the program immediately."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdlib.h>\n#include <stdio.h>\nint main() {\n    printf("Program is terminating.\\n");\n    exit(EXIT_SUCCESS);  // Terminates successfully\n    return 0;  // This line will never execute\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EXIT_SUCCESS"})," (usually ",(0,s.jsx)(n.code,{children:"0"}),") indicates successful execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EXIT_FAILURE"})," (usually ",(0,s.jsx)(n.code,{children:"1"}),") signals an error occurred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exit()"})," ensures proper cleanup before termination."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"using-exit-for-error-handling",children:"Using exit() for Error Handling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    FILE *fp = fopen("nonexistent.txt", "r");\n    if (fp == NULL) {\n        perror("Error opening file");\n        exit(EXIT_FAILURE);  // Terminates with failure\n    }\n    fclose(fp);\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"why-use-exit-instead-of-return",children:["Why Use ",(0,s.jsx)(n.code,{children:"exit()"})," instead of ",(0,s.jsx)(n.code,{children:"return"}),"?"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"return"})," only exits the current function. ",(0,s.jsx)(n.code,{children:"exit()"})," terminates the entire program immediately. It ensures that all open file handles are closed and buffers are flushed before exiting."]}),"\n",(0,s.jsx)(n.h3,{id:"returning-exit-codes-to-the-os",children:"Returning Exit Codes to the OS"}),"\n",(0,s.jsx)(n.p,{children:"You can return custom exit codes to the operating system to indicate different outcomes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int main() {\n    return 2;  // OS can check this exit code\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Custom exit codes can be used in shell scripts or batch files to determine program success or failure."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);