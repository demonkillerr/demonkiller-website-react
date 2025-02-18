"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[7677],{9049:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"code/languages/C/types_operators_expression","title":"Types, Operators & Expressions","description":"This document covers Types, Operators & Expressions in C.","source":"@site/docs/code/languages/C/types_operators_expressions.md","sourceDirName":"code/languages/C","slug":"/code/languages/C/types_operators_expression","permalink":"/docs/code/languages/C/types_operators_expression","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"demonkiller","lastUpdatedAt":1739851298000,"frontMatter":{"title":"Types, Operators & Expressions","id":"types_operators_expression","sidebar_label":"Types, Operators & Expressions"},"sidebar":"docs","previous":{"title":"Preprocessors Directives","permalink":"/docs/code/languages/C/preprocessor"},"next":{"title":"Storage Classes","permalink":"/docs/code/languages/C/storage_class"}}');var r=s(4848),d=s(8453);const t={title:"Types, Operators & Expressions",id:"types_operators_expression",sidebar_label:"Types, Operators & Expressions"},l=void 0,c={},a=[{value:"Data Types in C",id:"data-types-in-c",level:2},{value:"Primary Datatypes",id:"primary-datatypes",level:3},{value:"Example:",id:"example",level:4},{value:"Derived Datatypes",id:"derived-datatypes",level:3},{value:"The <code>const</code> Keyword (Constant Variables)",id:"the-const-keyword-constant-variables",level:2},{value:"Declaring <code>const</code> Variables",id:"declaring-const-variables",level:3},{value:"Operators",id:"operators",level:2},{value:"Arithmetic Operators",id:"arithmetic-operators",level:3},{value:"Example:",id:"example-1",level:4},{value:"Comparison Operators",id:"comparison-operators",level:3},{value:"Logical Operators",id:"logical-operators",level:3},{value:"Example in an if statement",id:"example-in-an-if-statement",level:4},{value:"Bitwise Operators",id:"bitwise-operators",level:3},{value:"Example:",id:"example-2",level:4},{value:"Assignment Operators",id:"assignment-operators",level:3},{value:"Increment and Decrement Operators",id:"increment-and-decrement-operators",level:3},{value:"Expressions in C",id:"expressions-in-c",level:2},{value:"Example:",id:"example-3",level:4},{value:"Operator Precedence",id:"operator-precedence",level:3},{value:"Example:",id:"example-4",level:4},{value:"Type Conversions in C",id:"type-conversions-in-c",level:2},{value:"Implicit Type Conversion (Type Promotion)",id:"implicit-type-conversion-type-promotion",level:3},{value:"Explicit Type Casting",id:"explicit-type-casting",level:3},{value:"Enumerations (enum)",id:"enumerations-enum",level:2},{value:"Declaring an enum",id:"declaring-an-enum",level:3},{value:"Assigning Custom Values",id:"assigning-custom-values",level:3},{value:"Using enum in Code",id:"using-enum-in-code",level:3},{value:"Benefits of Using enum",id:"benefits-of-using-enum",level:3}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document covers Types, Operators & Expressions in C."}),"\n",(0,r.jsx)(n.p,{children:"In this section, we will cover the fundamental building blocks of the C programming language: data types, operators, and expressions. Understanding these concepts is crucial as they form the foundation for writing efficient and effective C programs."}),"\n",(0,r.jsx)(n.h2,{id:"data-types-in-c",children:"Data Types in C"}),"\n",(0,r.jsx)(n.p,{children:"C provides various data types to store different kinds of values. These can be categorized into:"}),"\n",(0,r.jsx)(n.h3,{id:"primary-datatypes",children:"Primary Datatypes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Size (bytes)"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"char"})}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Stores a single character"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Stores whole numbers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"float"})}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Stores decimal numbers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"double"})}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"Stores double-precision floating-point numbers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"void"})}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Represents no type (used for functions)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\nint main() {\n    int a = 10;\n    float b = 5.5;\n    char c = \'X\';\n    printf("Integer: %d\\n", a);\n    printf("Float: %.1f\\n", b);\n    printf("Character: %c\\n", c);\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"derived-datatypes",children:"Derived Datatypes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Arrays: Collection of elements of the same type."}),"\n",(0,r.jsx)(n.li,{children:"Pointers: Variables that store memory addresses."}),"\n",(0,r.jsx)(n.li,{children:"Structures (struct): User-defined data types that group related variables."}),"\n",(0,r.jsx)(n.li,{children:"Enumerations (enum): Used to assign names to integral constants."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"the-const-keyword-constant-variables",children:["The ",(0,r.jsx)(n.code,{children:"const"})," Keyword (Constant Variables)"]}),"\n",(0,r.jsx)(n.p,{children:"The const keyword is used to declare read-only variables, function parameters, and pointers to prevent unintended modifications."}),"\n",(0,r.jsxs)(n.h3,{id:"declaring-const-variables",children:["Declaring ",(0,r.jsx)(n.code,{children:"const"})," Variables"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"const int MAX_VALUE = 100;\nMAX_VALUE = 50;  // \u274c Error: Cannot modify a constant variable\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"const"})," variables must be initialized at the time of declaration. Attempting to modify them results in a compilation error."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["It is good practice to name ",(0,r.jsx)(n.code,{children:"const"})," variables in UPPER_CASE."]})}),"\n",(0,r.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,r.jsx)(n.p,{children:"Operators allow you to perform operations on variables and values."}),"\n",(0,r.jsx)(n.h3,{id:"arithmetic-operators",children:"Arithmetic Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"+"})}),(0,r.jsx)(n.td,{children:"Addition"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a + b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-"})}),(0,r.jsx)(n.td,{children:"Subtraction"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a - b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsx)(n.td,{children:"Multiplication"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a * b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/"})}),(0,r.jsx)(n.td,{children:"Division"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a / b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"%"})}),(0,r.jsx)(n.td,{children:"Modulus"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"a % b"})," (remainder)"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int sum = 10 + 5;\nprintf("Sum: %d", sum);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"comparison-operators",children:"Comparison Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"=="})}),(0,r.jsx)(n.td,{children:"Equal to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a == b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"!="})}),(0,r.jsx)(n.td,{children:"Not equal to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a != b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:">"})}),(0,r.jsx)(n.td,{children:"Greater than"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a > b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<"})}),(0,r.jsx)(n.td,{children:"Less than"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a < b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:">="})}),(0,r.jsx)(n.td,{children:"Greater than or equal to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a >= b"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<="})}),(0,r.jsx)(n.td,{children:"Less than or equal to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a <= b"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"logical-operators",children:"Logical Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"&&"})}),(0,r.jsx)(n.td,{children:"Logical AND"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a > 5 && b < 10"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"||"})}),(0,r.jsx)(n.td,{children:"Logical OR"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a > 5 || b < 10"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"!"})}),(0,r.jsx)(n.td,{children:"Logical NOT"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"!(a > b)"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-in-an-if-statement",children:"Example in an if statement"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'if (a > 5 && b < 10) {\n    printf("Both conditions are true");\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Please note that if statements will be covered in control flow."})}),"\n",(0,r.jsx)(n.h3,{id:"bitwise-operators",children:"Bitwise Operators"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"&"})," (AND), ",(0,r.jsx)(n.code,{children:"|"})," (OR), ",(0,r.jsx)(n.code,{children:"^"})," (XOR), ",(0,r.jsx)(n.code,{children:"<<"})," (Left Shift), ",(0,r.jsx)(n.code,{children:">>"})," (Right Shift)"]}),"\n",(0,r.jsx)(n.p,{children:"Used for low-level operations like setting or clearing bits."}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int a = 5; // 0101 in binary\nint b = 3; // 0011 in binary\nprintf("Bitwise AND: %d", a & b); // Output: 1 (0001 in binary)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"assignment-operators",children:"Assignment Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{children:"Equivalent To"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = 10;"})}),(0,r.jsxs)(n.td,{children:["Assign 10 to ",(0,r.jsx)(n.code,{children:"a"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"+="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a += 5;"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = a + 5;"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a -= 5;"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = a - 5;"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a *= 5;"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = a * 5;"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a /= 5;"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = a / 5;"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"%="})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a %= 5;"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"a = a % 5;"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"increment-and-decrement-operators",children:"Increment and Decrement Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"++"})}),(0,r.jsx)(n.td,{children:"Increment by 1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"a++"})," or ",(0,r.jsx)(n.code,{children:"++a"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--"})}),(0,r.jsx)(n.td,{children:"Decrement by 1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"a--"})," or ",(0,r.jsx)(n.code,{children:"--a"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"expressions-in-c",children:"Expressions in C"}),"\n",(0,r.jsx)(n.p,{children:"Expressions combine values, operators, and variables to produce results."}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int x = (10 + 5) * 2;\nprintf("Result: %d", x);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"operator-precedence",children:"Operator Precedence"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"* / %"})," > ",(0,r.jsx)(n.code,{children:"+ -"})," > ",(0,r.jsx)(n.code,{children:"== != > <"})," > ",(0,r.jsx)(n.code,{children:"&& ||"})]}),"\n",(0,r.jsxs)(n.li,{children:["Parentheses ",(0,r.jsx)(n.code,{children:"()"})," overrides all precedence"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int result = 5 + 3 * 2; // Output: 11\nint correct = (5 + 3) * 2; // Output: 16\n"})}),"\n",(0,r.jsx)(n.h2,{id:"type-conversions-in-c",children:"Type Conversions in C"}),"\n",(0,r.jsx)(n.h3,{id:"implicit-type-conversion-type-promotion",children:"Implicit Type Conversion (Type Promotion)"}),"\n",(0,r.jsx)(n.p,{children:"C automatically converts data types when needed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int a = 5;\ndouble b = a;  // int is promoted to double\n"})}),"\n",(0,r.jsx)(n.h3,{id:"explicit-type-casting",children:"Explicit Type Casting"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"float a = 5.67;\nint b = (int)a;  // Explicit type conversion\n"})}),"\n",(0,r.jsx)(n.h2,{id:"enumerations-enum",children:"Enumerations (enum)"}),"\n",(0,r.jsx)(n.p,{children:"An enumeration (enum) is a user-defined type consisting of named integer constants."}),"\n",(0,r.jsx)(n.h3,{id:"declaring-an-enum",children:"Declaring an enum"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Day {\n    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"By default, values start at 0 (SUNDAY = 0, MONDAY = 1, ...)."}),"\n",(0,r.jsx)(n.h3,{id:"assigning-custom-values",children:"Assigning Custom Values"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"enum Status {\n    SUCCESS = 1,\n    FAILURE = 0,\n    PENDING = -1\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"using-enum-in-code",children:"Using enum in Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\nint main() {\n    enum Day today = FRIDAY;\n    printf("Today is day number %d\\n", today);\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"benefits-of-using-enum",children:"Benefits of Using enum"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improves code readability."}),"\n",(0,r.jsx)(n.li,{children:"Reduces the use of magic numbers."}),"\n",(0,r.jsx)(n.li,{children:"Groups related constants under a single type."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);