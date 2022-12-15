import ReactMarkdown from "react-markdown"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import React from "react"
// https://github.com/rehypejs/rehype-highlight
// Also looks good: https://github.com/timlrx/rehype-prism-plus
// And this: https://github.com/shikijs/shiki
import rehypeHighlight from 'rehype-highlight'

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
    />
  )
}