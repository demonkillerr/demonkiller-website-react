"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[3948],{6158:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"code/languages/C/pointer_to_function","title":"Pointer to Functions","description":"This document covers Pointer to Functions in C.","source":"@site/docs/code/languages/C/pointer_to_function.md","sourceDirName":"code/languages/C","slug":"/code/languages/C/pointer_to_function","permalink":"/docs/code/languages/C/pointer_to_function","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Gaurang","lastUpdatedAt":1739855289000,"frontMatter":{"title":"Pointer to Functions","id":"pointer_to_function","sidebar_label":"Pointer to Functions"},"sidebar":"docs","previous":{"title":"Pointers","permalink":"/docs/code/languages/C/pointers"},"next":{"title":"Arrays","permalink":"/docs/code/languages/C/arrays"}}');var o=e(4848),a=e(8453);const r={title:"Pointer to Functions",id:"pointer_to_function",sidebar_label:"Pointer to Functions"},s=void 0,c={},l=[{value:"What is a Pointer to a Function?",id:"what-is-a-pointer-to-a-function",level:2},{value:"Declaring a Function Pointer",id:"declaring-a-function-pointer",level:3},{value:"Example",id:"example",level:4},{value:"Assigning a Function to a Pointer",id:"assigning-a-function-to-a-pointer",level:3},{value:"Function Pointers as Arguments (Callbacks)",id:"function-pointers-as-arguments-callbacks",level:2},{value:"Example: Using Function Pointers as Arguments",id:"example-using-function-pointers-as-arguments",level:4},{value:"Array of Function Pointers",id:"array-of-function-pointers",level:2},{value:"Example: Function Pointer Array for a Calculator",id:"example-function-pointer-array-for-a-calculator",level:4},{value:"Real-World Applications of Function Pointers",id:"real-world-applications-of-function-pointers",level:2}];function d(n){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"This document covers Pointer to Functions in C."}),"\n",(0,o.jsx)(i.p,{children:"A pointer to a function allows storing the address of a function and calling it dynamically. This is useful for callback functions, dynamic function selection, and implementing event-driven programming."}),"\n",(0,o.jsx)(i.p,{children:"In this section, we will cover:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"What function pointers are and how they work."}),"\n",(0,o.jsx)(i.li,{children:"Declaring and assigning function pointers."}),"\n",(0,o.jsx)(i.li,{children:"Calling functions through pointers."}),"\n",(0,o.jsx)(i.li,{children:"Using function pointers as arguments (callbacks)."}),"\n",(0,o.jsx)(i.li,{children:"Array of function pointers."}),"\n",(0,o.jsx)(i.li,{children:"Real-world applications of function pointers."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"what-is-a-pointer-to-a-function",children:"What is a Pointer to a Function?"}),"\n",(0,o.jsx)(i.p,{children:"A function pointer is a variable that stores the memory address of a function, allowing indirect function calls."}),"\n",(0,o.jsx)(i.h3,{id:"declaring-a-function-pointer",children:"Declaring a Function Pointer"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:"returnType (*pointerName)(parameterTypes);\n"})}),"\n",(0,o.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:"int (*funcPtr)(int, int);  // Pointer to a function taking two ints and returning an int\n"})}),"\n",(0,o.jsx)(i.h3,{id:"assigning-a-function-to-a-pointer",children:"Assigning a Function to a Pointer"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:'#include <stdio.h>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int (*funcPtr)(int, int) = add; // Assign function address\n    printf("Sum: %d\\n", funcPtr(5, 3)); // Call function via pointer\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"funcPtr = add;"})," stores the function's address."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"funcPtr(5, 3);"})," calls ",(0,o.jsx)(i.code,{children:"add()"})," via pointer."]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(i.h2,{id:"function-pointers-as-arguments-callbacks",children:"Function Pointers as Arguments (Callbacks)"}),"\n",(0,o.jsx)(i.p,{children:"A callback function is a function passed as an argument to another function, commonly used for event-driven programming."}),"\n",(0,o.jsx)(i.h4,{id:"example-using-function-pointers-as-arguments",children:"Example: Using Function Pointers as Arguments"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:'#include <stdio.h>\nvoid executeOperation(int a, int b, int (*operation)(int, int)) {\n    printf("Result: %d\\n", operation(a, b));\n}\n\nint multiply(int x, int y) {\n    return x * y;\n}\n\nint main() {\n    executeOperation(4, 5, multiply); // Pass function as argument\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"executeOperation()"})," receives a function pointer as an argument. It can call any function that matches the expected signature."]})}),"\n",(0,o.jsx)(i.h2,{id:"array-of-function-pointers",children:"Array of Function Pointers"}),"\n",(0,o.jsx)(i.p,{children:"An array of function pointers allows selecting a function dynamically from a set of predefined functions."}),"\n",(0,o.jsx)(i.h4,{id:"example-function-pointer-array-for-a-calculator",children:"Example: Function Pointer Array for a Calculator"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:'#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b) { return (b != 0) ? a / b : 0; }\n\nint main() {\n    int (*operations[4])(int, int) = {add, subtract, multiply, divide};\n    int choice, a = 10, b = 2;\n    printf("Choose operation: 0-Add, 1-Subtract, 2-Multiply, 3-Divide: ");\n    scanf("%d", &choice);\n    if (choice >= 0 && choice < 4)\n        printf("Result: %d\\n", operations[choice](a, b));\n    else\n        printf("Invalid choice!\\n");\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsx)(i.p,{children:"The array operations holds pointers to different mathematical functions. The user selects an operation dynamically at runtime."})}),"\n",(0,o.jsx)(i.h2,{id:"real-world-applications-of-function-pointers",children:"Real-World Applications of Function Pointers"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Callbacks in event-driven programs (e.g., GUI programming)."}),"\n",(0,o.jsx)(i.li,{children:"Dynamic dispatch in C-based frameworks (e.g., function hooks in embedded systems)."}),"\n",(0,o.jsx)(i.li,{children:"Sorting algorithms (e.g., qsort() uses function pointers to compare elements)."}),"\n"]})]})}function u(n={}){const{wrapper:i}={...(0,a.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>s});var t=e(6540);const o={},a=t.createContext(o);function r(n){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(a.Provider,{value:i},n.children)}}}]);