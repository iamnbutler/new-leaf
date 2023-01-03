import "./reset.css";
import "./global.css";
import "./typography.css";
import "./code.css";
import localfont from "@next/font/local";
import { posts } from "components/blog/Posts";
import { PropsWithChildren } from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Footer from "./Footer";

const berkleyMono = localfont({
  src: "./font/BerkeleyMonoVariable-Regular.woff2",
  display: "block",
  variable: "--font-berkeley-mono",
});

function GridRow({ children }: PropsWithChildren) {
  return (
    <article className="border-b py-4 grid grid-cols-6 gap-8 grow border-[var(--theme-orange)] text-[var(--theme-orange)] text-lg">
      {children}
    </article>
  )
}

function Article({ post }: { post: Post }) {
  return (
    <Link href={post.url} className="group">
      <GridRow>
        <h2 className="col-span-4 group-hover:text-[var(--theme-yellow)] truncate">{post.title}</h2>
        <time className="col-span-2">{post.date_created}</time>
      </GridRow>
    </Link>
  )
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme='dark'>
      <body
        className={`${berkleyMono.className} w-screen`}
      >
        <div className="flex">
          <div className="grow">
            <main className="w-full px-8 grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <GridRow>
                  <Link href={'/'} className="col-span-4">
                    Nate Butler
                  </Link>
                  <Link href={'/blog'} className="col-span-1">
                    /blog
                  </Link>
                  <Link href={'/work'} className="col-span-1">
                    /work
                  </Link>
                </GridRow>
                {posts.map(post => (
                  <Article post={post} key={post.uuid} />
                ))}
                <Footer />
              </div>
              <div className="col-span-6 border border-[var(--theme-orange)] mt-4 p-4">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}