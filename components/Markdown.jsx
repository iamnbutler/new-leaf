import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Markdown() {
  const markdown = `Just a link: https://reactjs.com.`

  return (
    <ReactMarkdown
      children={markdown}
      components={{
        a: ({ node, ...props }) => <a className='text-purple-500 underline' {...props} />,
        pre: ({ node, ...props }) => <pre className='rounded-md border border-2' {...props} />,
      }}
      remarkPlugins={[remarkGfm]} />,
  )
}