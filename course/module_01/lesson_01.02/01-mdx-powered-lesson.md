---
title: MDX Powered Lesson
isPublicLesson: true
useMdx: true
---

import Highlight from '~/module_01/lesson_01.02/protected/Highlight'

> This is an example of how to use MDX

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

## Inline MDX

Here's an example of using inline JavaScript code for React components:

export const InlineHighlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

<InlineHighlight color="#25c2a0">Docusaurus green</InlineHighlight> and <InlineHighlight color="#1877F2">Facebook blue</InlineHighlight> are my favorite colors.

## Importing MDX

<Highlight color="#BE4CDB">newline purple</Highlight> is another color

We can also use cq to import the code for `<Highlight>` from disk:

{lang=javascript,line-numbers=off,crop-query=.Highlight}
<<[./protected/Highlight.js](./protected/Highlight.js)

## Using Markdown, too

You can also write **markdown** alongside the MDX and this appears on newline, too