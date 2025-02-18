"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[2494],{3134:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"code/languages/C/functions","title":"Functions","description":"This document covers Functions & Program Structure in C.","source":"@site/docs/code/languages/C/functions.md","sourceDirName":"code/languages/C","slug":"/code/languages/C/functions","permalink":"/docs/code/languages/C/functions","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"demonkiller","lastUpdatedAt":1739851298000,"frontMatter":{"title":"Functions","id":"functions","sidebar_label":"Functions"},"sidebar":"docs","previous":{"title":"Control Flow","permalink":"/docs/code/languages/C/control_flow"},"next":{"title":"Recursion","permalink":"/docs/code/languages/C/recursion"}}');var s=i(4848),a=i(8453);const r={title:"Functions",id:"functions",sidebar_label:"Functions"},o=void 0,l={},d=[{value:"Function Structure in Modern C",id:"function-structure-in-modern-c",level:2},{value:"Example of a Simple Function",id:"example-of-a-simple-function",level:4},{value:"Multi-Function Programs in Modern C",id:"multi-function-programs-in-modern-c",level:2},{value:"Function Arguments in C",id:"function-arguments-in-c",level:2},{value:"Pass-by-Value (Default Behavior)",id:"pass-by-value-default-behavior",level:3},{value:"Example",id:"example",level:4},{value:"Advantages and Disadvantages of Pass by Value",id:"advantages-and-disadvantages-of-pass-by-value",level:4},{value:"Advantages:",id:"advantages",level:5},{value:"Disadvantages:",id:"disadvantages",level:5},{value:"Pass-by-Reference Using Pointers",id:"pass-by-reference-using-pointers",level:3},{value:"Example",id:"example-1",level:4},{value:"Advantages and Disadvantages of Pass by Reference",id:"advantages-and-disadvantages-of-pass-by-reference",level:4},{value:"Advantages:",id:"advantages-1",level:5},{value:"Disadvantages:",id:"disadvantages-1",level:5},{value:"Return Values and Void Functions",id:"return-values-and-void-functions",level:2},{value:"Return a value",id:"return-a-value",level:3},{value:"Void Functions (No Return Value)",id:"void-functions-no-return-value",level:3},{value:"<code>const</code> in Function Parameters",id:"const-in-function-parameters",level:2}];function c(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"This document covers Functions & Program Structure in C."}),"\n",(0,s.jsx)(e.p,{children:"Functions are a fundamental building block in C programming that allow for modular, reusable, and maintainable code. Understanding function structure and program organization is key to writing efficient C programs."}),"\n",(0,s.jsx)(e.p,{children:"In this section, we will cover:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Function structure in modern C."}),"\n",(0,s.jsx)(e.li,{children:"Multi-function programs and how to split code into multiple functions."}),"\n",(0,s.jsx)(e.li,{children:"Function arguments, including pass-by-value and pass-by-reference."}),"\n",(0,s.jsx)(e.li,{children:"Using pointers with function arguments (briefly, as pointers will be covered in depth later)."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"function-structure-in-modern-c",children:"Function Structure in Modern C"}),"\n",(0,s.jsx)(e.p,{children:"A function in C consists of:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Return type: Specifies the type of value the function returns."}),"\n",(0,s.jsx)(e.li,{children:"Function name: Identifier used to call the function."}),"\n",(0,s.jsx)(e.li,{children:"Parameter list: Inputs passed to the function (optional)."}),"\n",(0,s.jsx)(e.li,{children:"Function body: Contains the executable statements."}),"\n",(0,s.jsx)(e.li,{children:"Return statement: (Optional) Returns a value if the function is non-void."}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"example-of-a-simple-function",children:"Example of a Simple Function"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\n// Function prototype (declaration)\nint add(int a, int b);\n\nint main() {\n    int result = add(5, 10);\n    printf("Sum: %d\\n", result);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Function declaration (prototype) before ",(0,s.jsx)(e.code,{children:"main()"})," allows the compiler to know about the function before it's defined."]}),"\n",(0,s.jsx)(e.li,{children:"Function definition contains the actual logic."}),"\n",(0,s.jsxs)(e.li,{children:["Function call in ",(0,s.jsx)(e.code,{children:"main()"})," invokes the function."]}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"multi-function-programs-in-modern-c",children:"Multi-Function Programs in Modern C"}),"\n",(0,s.jsx)(e.p,{children:"For larger programs, breaking code into multiple functions makes it more readable and maintainable."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nvoid greet();\nint square(int n);\n\nint main() {\n    greet();\n    int num = 4;\n    printf("Square of %d is %d\\n", num, square(num));\n    return 0;\n}\n\nvoid greet() {\n    printf("Hello! Welcome to the program.\\n");\n}\n\nint square(int n) {\n    return n * n;\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"greet()"})," is a void function (does not return a value)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"square(int n)"})," returns an integer value."]}),"\n",(0,s.jsx)(e.li,{children:"The program remains structured and readable."}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"function-arguments-in-c",children:"Function Arguments in C"}),"\n",(0,s.jsx)(e.p,{children:"Function arguments allow passing values to functions."}),"\n",(0,s.jsx)(e.h3,{id:"pass-by-value-default-behavior",children:"Pass-by-Value (Default Behavior)"}),"\n",(0,s.jsx)(e.p,{children:"The function receives a copy of the variable. Changes made inside the function do not affect the original variable. This is the most common way of passing arguments in C."}),"\n",(0,s.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nvoid modify(int x);\n\nint main() {\n    int num = 10;\n    modify(num);\n    printf("Value after function call: %d\\n", num); // Still 10\n    return 0;\n}\n\nvoid modify(int x) {\n    x = 20; // This change is local to the function\n}\n'})}),"\n",(0,s.jsx)(e.h4,{id:"advantages-and-disadvantages-of-pass-by-value",children:"Advantages and Disadvantages of Pass by Value"}),"\n",(0,s.jsx)(e.h5,{id:"advantages",children:"Advantages:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Prevents unintended modifications of the original variable."}),"\n",(0,s.jsx)(e.li,{children:"Ensures function encapsulation (modifications remain within the function)."}),"\n"]}),"\n",(0,s.jsx)(e.h5,{id:"disadvantages",children:"Disadvantages:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Copies the entire value, which can be inefficient for large data structures."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"pass-by-reference-using-pointers",children:"Pass-by-Reference Using Pointers"}),"\n",(0,s.jsx)(e.p,{children:"Instead of passing a copy, we pass a memory address. Changes inside the function affect the original variable. This method is used when modifying data directly is needed."}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"This section contain information about pointers. Pointers are covered in depth in the next chapter."})}),"\n",(0,s.jsx)(e.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nvoid modify(int *x);\n\nint main() {\n    int num = 10;\n    modify(&num);\n    printf("Value after function call: %d\\n", num); // Now 20\n    return 0;\n}\n\nvoid modify(int *x) {\n    *x = 20; // Modifies the actual variable\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"int *x"})," indicates a pointer parameter."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"modify(&num);"})," passes the memory address of num."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"*x = 20;"})," modifies the original num variable."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(e.h4,{id:"advantages-and-disadvantages-of-pass-by-reference",children:"Advantages and Disadvantages of Pass by Reference"}),"\n",(0,s.jsx)(e.h5,{id:"advantages-1",children:"Advantages:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Avoids unnecessary copying, making it more efficient for large data structures."}),"\n",(0,s.jsx)(e.li,{children:"Allows functions to modify the original variable directly."}),"\n"]}),"\n",(0,s.jsx)(e.h5,{id:"disadvantages-1",children:"Disadvantages:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Requires explicit handling of pointers, increasing complexity."}),"\n",(0,s.jsx)(e.li,{children:"Modifications persist outside the function, which may lead to unintended side effects."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"return-values-and-void-functions",children:"Return Values and Void Functions"}),"\n",(0,s.jsx)(e.p,{children:"Functions can return values or perform actions without returning anything."}),"\n",(0,s.jsx)(e.h3,{id:"return-a-value",children:"Return a value"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"int multiply(int a, int b) {\n    return a * b;\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"void-functions-no-return-value",children:"Void Functions (No Return Value)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'void printMessage() {\n    printf("This is a message.\\n");\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"const-in-function-parameters",children:[(0,s.jsx)(e.code,{children:"const"})," in Function Parameters"]}),"\n",(0,s.jsxs)(e.p,{children:["Using ",(0,s.jsx)(e.code,{children:"const"})," in function parameters prevents modification of input values."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'void printMessage(const char *msg) {\n    printf("%s\\n", msg);\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"Prevents accidental modification of the input string. Helps in optimizing the code as the compiler knows the value won\u2019t change."})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);