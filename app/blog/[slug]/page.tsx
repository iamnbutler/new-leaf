import PostLayout from "app/Post";
import { posts, usePost } from "components/blog/Posts";

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
    <PostLayout post={post} current={true} />
  )
}