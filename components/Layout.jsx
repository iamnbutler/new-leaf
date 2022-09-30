import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import SkipLink from "./SkipLink";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative flex flex-col w-screen min-h-screen space-x-1 overflow-x-hidden">
        <SkipLink />
        <div className="w-full border-b bg-surface border-border">
          <div className="mx-auto font-mono">
            <TopNav />
          </div>
        </div>
        <div className="flex flex-grow mx-auto space-x-1 max-w-7xl h-full">
          <LeftNav />
          <div className="w-full">
            {/* Main has focus:outline-none to prevent a focus ring when jumping to it from the skip link */}
            <main
              className="max-w-4xl px-16 mx-auto border-border focus:outline-none"
              id="main-content"
              tabIndex={-1}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
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
