import { allPosts, Post } from "contentlayer/generated"
import ReactMarkdown from "react-markdown"

function Article({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <time>{post.date_created}</time>
      <ReactMarkdown>
        {post.body.raw}
      </ReactMarkdown>
    </article>
  )
}

export default function HomePage() {
  const posts = allPosts

  return (
    <main>
      <h1>Home Page</h1>
      {posts.map(post => (
        <Article post={post} key={post.uuid} />
      ))}
    </main>
  )
}