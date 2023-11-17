"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Markdown Tutorial",id:"markdown",sidebar_label:"Markdown"},l=void 0,i={unversionedId:"code/tools/markdown",id:"code/tools/markdown",title:"Markdown Tutorial",description:"Markdown is a lightweight markup language for creating formatted text using a plain-text editor. This document will list all the basic features of markdown.",source:"@site/docs/code/tools/markdown.md",sourceDirName:"code/tools",slug:"/code/tools/markdown",permalink:"/docs/code/tools/markdown",draft:!1,tags:[],version:"current",lastUpdatedBy:"demonkiller",lastUpdatedAt:1700234961,formattedLastUpdatedAt:"Nov 17, 2023",frontMatter:{title:"Markdown Tutorial",id:"markdown",sidebar_label:"Markdown"},sidebar:"docs",previous:{title:"Git",permalink:"/docs/code/tools/git"}},d={},s=[{value:"Header",id:"header",level:2},{value:"HTML",id:"html",level:2},{value:"Details",id:"details",level:3},{value:"Styles",id:"styles",level:2},{value:"Header text",id:"header-text",level:3},{value:"Qoutes",id:"qoutes",level:3},{value:"Code Blocks",id:"code-blocks",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"Markdown")," is a lightweight markup language for creating formatted text using a plain-text editor. This document will list all the basic features of markdown."),(0,o.kt)("p",null,"Markdown has a syntax that enables you to write formatted content in a readable syntax."),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"Header in markdown is known as front matter. Front matter is used to add metadata to your Markdown file. All content plugins have their own front matter schema, and use the front matter to enrich the default metadata inferred from the content or other configuration."),(0,o.kt)("p",null,"Front matter is provided at the very top of the file, enclosed by three dashes ---. The content is parsed as YAML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\ntitle: My Doc Title\nmore_data:\n  - Can be provided\n  - as: objects\n    or: arrays\n---\n")),(0,o.kt)("h2",{id:"html"},"HTML"),(0,o.kt)("p",null,"You can embed HTML code into markdown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# New page\n<p>\n    Some text\n</p>\n")),(0,o.kt)("h3",{id:"details"},"Details"),(0,o.kt)("p",null,"Markdown can embed HTML elements, and details HTML elements are beautifully styled:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Toggle me!"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,o.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"### Details element example\n\n<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n    <br/>\n    <details>\n      <summary>\n        Nested toggle! Some surprise inside...\n      </summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n")),(0,o.kt)("h2",{id:"styles"},"Styles"),(0,o.kt)("p",null,"Styling in markdown is very simple."),(0,o.kt)("h3",{id:"header-text"},"Header text"),(0,o.kt)("p",null,"Header text is written using the # symbol. It is equivalent to H1-H6 in HTML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Hello --\x3e <h1>Hello</h1>\n\n### Hello --\x3e <h3>Hello</h3>\n")),(0,o.kt)("h3",{id:"qoutes"},"Qoutes"),(0,o.kt)("p",null,"Qoutes in markdown can be made with >"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">The pen is mighter than sword\n>\n> \u2014 Sun Tzu\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The pen is mighter than sword"),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Sun Tzu")),(0,o.kt)("h3",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"You can emphasis a codeblock in markdown by enclosing the code in backticks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="/src/components/HelloCodeTitle.js\nfunction HelloCodeTitle(props) {\nreturn <h1>Hello, {props.name}</h1>;\n}``` \n')))}p.isMDXComponent=!0}}]);