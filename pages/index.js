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
        <p>
          I&apos;m Nate, a designer & developer. I like building tools,
          automating things, and contributing to design education.
        </p>
        <p>
          I&apos;m currently focused on building collaborative software tools at{" "}
          <a href="https://zed.dev">Zed Industries</a>.
        </p>
        <p>
          Say hi on <a href="https://twitter.com/iamnbutler">Twitter!</a>
        </p>
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
