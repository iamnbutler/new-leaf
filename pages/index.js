import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

const intro = `# Nate Butler
  
I'm Nate, a designer & developer. I like building tools, automating things, and contributing to design education.

I'm currently focused on building collaborative software tools at [Zed Industries](https://zed.dev).

Say hi on [Twitter](https://twitter.com/iamnbutler)`

export default function Index() {
  return (
    <Layout>
      <Markdown>
        {intro}
      </Markdown>
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
