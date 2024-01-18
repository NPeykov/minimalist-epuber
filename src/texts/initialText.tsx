// TODO: change the text to include tables, images and see if it images can be added
const INITIAL_TEXT: string = `## Syntax highlighting

Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).

\`\`\`jsx
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`

The lift coefficient ($C_L^2$) is a dimensionless coefficient.

Pretty neat, eh?`

export default INITIAL_TEXT
