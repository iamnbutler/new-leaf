import { useMDXComponent } from 'next-contentlayer/hooks'
import Layout from "components/Layout";
import PageProse from "components/PageProse";
import { allTextPosts, TextPost } from "contentlayer/generated";

export default function PostPage({ post }: { post: TextPost }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Layout>
      <PageProse title={post.title} description={post.description.raw} date={post.date}>
        <MDXContent />
      </PageProse>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths: string[] = allTextPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allTextPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  return {
    props: {
      post,
    },
  };
}