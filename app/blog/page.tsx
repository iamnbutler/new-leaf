import { posts } from "components/blog/Posts"
import Link from "next/link"

export default function BlogIndex() {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <Link href={post.url} key={post.uuid}>
          <h2>{post.title}</h2>
        </Link>
      ))
      }
    </div>
  )
}