import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import SkipLink from "./SkipLink";
import TableOfContents from "./TableOfContents";

interface LayoutProps {
  children: React.ReactNode,
  toc?: boolean
}

export default function Layout({ children, toc }: LayoutProps) {
  return (
    <>
      <div className="relative flex flex-col w-screen min-h-screen space-x-1 overflow-x-hidden">
        <SkipLink />
        <div className="w-full border-b bg-surface border-border">
          <div className="mx-auto font-mono">
            <TopNav />
          </div>
        </div>
        <div className="flex flex-grow mx-auto space-x-1 w-full h-full">
          <LeftNav />
          <div className="flex flex-grow">
            {/* Main has focus:outline-none to prevent a focus ring when jumping to it from the skip link */}
            <main
              className="max-w-4xl px-16 mx-auto border-border focus:outline-none"
              id="main-content"
              tabIndex={-1}
            >
              {children}
            </main>
          </div>
          {toc && <TableOfContents />}
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
