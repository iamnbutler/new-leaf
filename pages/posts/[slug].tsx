import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import PageProse from "../../components/PageProse";

export function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find(post => post.slug === params.slug)
  if (post == undefined) throw "Didn't get a post from getStaticProps"
  return { props: { post } }
}

export default function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, description, date_created } = post
  const content = post.body.raw
  return (
    <Layout>
      <PageProse title={title} description={description} date={date_created}>
        <Markdown>
          {content}
        </Markdown>
      </PageProse>
    </Layout>
  );
}
