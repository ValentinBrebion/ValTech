---
prev: 
    text: 'HTML Configuration'
    link: '/en/language/HTML/HTMLConfiguration'
next:
    text: 'Introduction to Git'
    link: '/en/language/git/git'
---
# HTML Guide

You've probably wondered how a website is made? How is the information you see on the screen arranged? Let me clarify all of this.

First of all, when you visit a simple website, you're actually viewing what we call an ```HTML``` file.

## What is an HTML file?
### How to declare it?
Once you've downloaded a code editor, you'll create a new file. To tell the code editor that you're going to create an HTML file, you'll name your file whatever you want and add `.html` as follows:
```html
fileName.html
```
### What to do next?
It's simple: everything 😉

To be more precise, in an HTML file you can add text, images, videos, sound, etc., but before anything else, this guide will detail the best practices.

#### A- Tags
>If you want to develop websites, it will be useful to know the basics, namely: `tags`.

:::tip Definition
Tags are ***<u>the basic elements of HTML coding</u>***. They are used to format text, structure and organize the content of a page.
They also tell the browser how to display the page in question.
:::

#### B- How to declare them?
>Nothing could be simpler. All HTML files start with the doctype declaration followed by the opening tag and they all end with the closing tag, Example:

```html
<p></p> <!--paragraph-->
```
Of course, there's a whole range of them like:

| Types        |      Tags      |  
| ------------- | :-----------: |
| Paragraphs     | `<p></p>` |
| Images      |   `<img></img>`    |
| Videos | `<video></video>`   |

:::info tips
Of course, I'm not going to list all HTML tags here. However, there is a site that already does this and allows you to find additional characteristics about all existing HTML tags. I invite you to visit the site<br> [MDN web docs](https://developer.mozilla.org/en/docs/Web/HTML)
:::

## How to properly build an HTML page?
## Step 1: the structure

When you've created your HTML page, there's a structure to follow. To say that you're going to use HTML language, you'll
put these lines of code first:
```html
<!DOCTYPE html>
```
This line simply tells the browser what type of document to expect.

:::warning Culture
The doctype declaration `is not case-sensitive`. This means you can write it in several ways like:<br> 
`<!DOCTYPE html>`<br> 
`<!DocType html>`<br> 
`<!Doctype html>`<br> 
`<!doctype html>`
:::

Then you'll put the HTML tags and their content as follows:
```html
<!DOCTYPE html>
    <html>
        <head>
            <title>Title of the document</title>
        </head>
        <body>
            The content of the document......
        </body>
    </html>
```

### Head tag
This is where you'll declare what we call meta descriptions, style links, document title, etc...

### Body tag
This is where you'll structure your content by putting headings, tables, etc... 