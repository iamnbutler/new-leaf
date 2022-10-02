import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import PageProse from "../../components/PageProse";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils"

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return {
    props: {
      frontMatter: data,
      content: content,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default function PostPage({ frontMatter, content }) {
  const title = frontMatter.title;
  const description = frontMatter.description;

  return (
    <Layout>
      <PageProse title={title} description={description}>
        <Markdown>
          {content}
        </Markdown>
      </PageProse>
    </Layout>
  );
}
