import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../components/Layout";
import PageProse from "../components/PageProse";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index() {
  return (
    <Layout>
      <PageProse title="Nate Butler">
        <p>afdsa</p>
      </PageProse>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
