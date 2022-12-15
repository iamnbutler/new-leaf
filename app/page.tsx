import { posts } from "components/blog/Posts"
import Markdown from "components/Markdown"
import { Post } from "contentlayer/generated"

function Article({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <time>{post.date_created}</time>
      <Markdown content={post.body.raw} />
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