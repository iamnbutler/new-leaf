import Layout from "../components/Layout";
import Markdown from "../components/Markdown";

const intro = `# Nate Butler
  
I'm Nate, a designer & developer. I like building tools, automating things, and contributing to design education.

I'm currently focused on building collaborative software tools at [Zed Industries](https://zed.dev).

Say hi on [Twitter](https://twitter.com/iamnbutler)`

export default function Index() {
  return (
    <Layout>
      <div className="py-12">
        <Markdown>
          {intro}
        </Markdown>
      </div>
    </Layout>
  );
}
