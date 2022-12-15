import { posts } from "components/post/Posts"
import { Post } from "contentlayer/generated"
import ReactMarkdown from "react-markdown"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
// https://github.com/rehypejs/rehype-highlight
// Also looks good: https://github.com/timlrx/rehype-prism-plus
import rehypeHighlight from 'rehype-highlight'

function Article({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <time>{post.date_created}</time>
      <ReactMarkdown
        children={post.body.raw}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
      />
    </article>
  )
}

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      {posts.map(post => (
        <Article post={post} key={post.uuid} />
      ))}
    </main>
  )
}