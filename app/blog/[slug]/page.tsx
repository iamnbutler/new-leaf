import { posts, usePost } from "components/blog/Posts";
import Markdown from "components/Markdown"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogParams) {
  const { slug } = params;
  const post = usePost(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <Markdown content={post.body.raw} />
    </div>
  )
}