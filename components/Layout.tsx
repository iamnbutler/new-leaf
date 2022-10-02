import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import SkipLink from "./SkipLink";
import TableOfContents from "./TableOfContents";

interface LayoutProps {
  children: React.ReactNode,
  toc?: React.ReactNode
}

export default function Layout({ children, toc }: LayoutProps) {
  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden">
        <SkipLink />
        <div className="sticky w-full border-b bg-surface border-border m-0">
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
          {toc && toc}
        </div>
      </div>
    </>
  );
}