import Markdown from "components/Markdown"
import { Post } from "contentlayer/generated"

interface PostProps {
  post: Post
  current: boolean
}

export default function PostLayout({ post, current }: PostProps) {
  return (
    <div>
      <h2 className="text-3xl">{post.title}</h2>
      <div>
        <Markdown content={post.body.raw} />
      </div>
    </div>
  )
}