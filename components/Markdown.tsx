import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  children: string
  margins?: boolean
}

export const markdownH1 =
  "md-h1 text-5xl font-light leading-[1.15] mt-8 mb-4"
export const markdownH2 =
  "md-h2 text-3xl font-bold text-aqua font-regular mt-16 mb-4"
export const markdownH3 =
  "md-h3 text-2xl font-bold my-2 text-yellow font-medium"
export const markdownP =
  "md-p my-4 text-xl"
export const markdownA =
  "md-a text-orange-light hover:text-yellow-light underline"
export const markdownUL =
  "md-ul pl-4"
export const markdownIMG =
  "md-img my-4 border border-border"
export const markdownBLOCKQUOTE =
  "text-md text-secondary pl-4 border-l border-l-2 border-purple"
export const markdownPRE =
  "bg-surface p-3 rounded-lg border border-border overflow-x-auto text-sm drop-shadow-md"

export default function Markdown({ children, margins = true }: MarkdownProps) {

  function markdownStyle(element: string) {
    return (`${element} ${!margins && 'my-0'}`)
  }

  return (
    <div className='text-primary text-lg prose'>
      <ReactMarkdown
        children={children}
        components={{
          h1: ({ node, ...props }) => <h1 className={markdownStyle(markdownH1)} {...props} />,
          h2: ({ node, ...props }) => <h2 className={markdownStyle(markdownH2)} {...props} />,
          h3: ({ node, ...props }) => <h3 className={markdownStyle(markdownH3)} {...props} />,
          img: ({ node, ...props }) => <img className={markdownStyle(markdownIMG)} {...props} />,
          ul: ({ node, ...props }) => <ul className={markdownStyle(markdownUL)} {...props} />,
          p: ({ node, ...props }) => <p className={markdownStyle(markdownP)} {...props} />,
          a: ({ node, ...props }) => <a className={markdownStyle(markdownA)} {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className={markdownStyle(markdownBLOCKQUOTE)} {...props} />,
          pre: ({ node, ...props }) => <pre className={markdownStyle(markdownPRE)} {...props} />
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]} />
    </div>
  )
}