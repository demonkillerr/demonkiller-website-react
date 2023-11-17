---
title: Markdown Tutorial
id: markdown
sidebar_label: Markdown
---

[Markdown](https://commonmark.org/) is a lightweight markup language for creating formatted text using a plain-text editor. This document will list all the basic features of markdown.

Markdown has a syntax that enables you to write formatted content in a readable syntax.

## Header
Header in markdown is known as front matter. Front matter is used to add metadata to your Markdown file. All content plugins have their own front matter schema, and use the front matter to enrich the default metadata inferred from the content or other configuration.

Front matter is provided at the very top of the file, enclosed by three dashes ---. The content is parsed as YAML.

```
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```

## HTML
You can embed HTML code into markdown.
```
# New page
<p>
    Some text
</p>
```

### Details
Markdown can embed HTML elements, and details HTML elements are beautifully styled:

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>

```
### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>
```

## Styles
Styling in markdown is very simple.

### Header text
Header text is written using the # symbol. It is equivalent to H1-H6 in HTML.
```
# Hello --> <h1>Hello</h1>

### Hello --> <h3>Hello</h3>
```

### Qoutes
Qoutes in markdown can be made with >
```
>The pen is mighter than sword
>
> — Sun Tzu
```

>The pen is mighter than sword
>
> — Sun Tzu

### Code Blocks
You can emphasis a codeblock in markdown by enclosing the code in backticks

```
```jsx title="/src/components/HelloCodeTitle.js
function HelloCodeTitle(props) {
return <h1>Hello, {props.name}</h1>;
}``` 
```