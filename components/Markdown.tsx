import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  children: string
  margins?: boolean
}

export const markdownH1 = "prose-h1 text-4xl font-bold my-4"
export const markdownH2 = "prose-h2 text-3xl font-bold my-4"
export const markdownH3 = "prose-h3 text-2xl font-bold my-2"
export const markdownP = "prose-p my-4"
export const markdownUL = "prose-ul pl-4"
export const markdownIMG = "prose-img my-2"
export const markdownBLOCKQUOTE = "text-md text-secondary pl-4 border-l border-l-2 border-border"

export default function Markdown({ children, margins = true }: MarkdownProps) {

  function markdownStyle(element: string) {
    return (`${element} ${!margins && 'my-0'}`)
  }

  return (
    <div className='text-primary text-lg'>
      <ReactMarkdown
        children={children}
        components={{
          h1: ({ node, ...props }) => <h1 className={markdownStyle(markdownH1)} {...props} />,
          h2: ({ node, ...props }) => <h2 className={markdownStyle(markdownH2)} {...props} />,
          h3: ({ node, ...props }) => <h3 className={markdownStyle(markdownH3)} {...props} />,
          img: ({ node, ...props }) => <img className={markdownStyle(markdownIMG)} {...props} />,
          ul: ({ node, ...props }) => <ul className={markdownStyle(markdownUL)} {...props} />,
          p: ({ node, ...props }) => <p className={markdownStyle(markdownP)} {...props} />,
          a: ({ node, ...props }) => <a className='text-purple-500 underline' {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className={markdownStyle(markdownBLOCKQUOTE)} {...props} />,
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]} />
    </div>
  )
}