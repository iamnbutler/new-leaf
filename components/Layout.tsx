import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import SkipLink from "./SkipLink";

interface LayoutProps {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden">
        <TopNav />
        <div className="z-0 mt-12 flex mx-auto w-full h-full">
          <LeftNav />
          <div className="flex flex-grow">
            {/* Main has focus:outline-none to prevent a focus ring when jumping to it from the skip link */}
            <main
              className="max-w-4xl px-16 mx-auto focus:outline-none"
              id="main-content"
              tabIndex={-1}
            >
              {children}
            </main>
          </div>
        </div>
        <SkipLink />
      </div>
    </>
  );
}