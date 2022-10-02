import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../../components/Layout";
import Markdown, { markdownUL } from "../../components/Markdown";
import PageProse from "../../components/PageProse";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils"
import { useEffect, useState } from "react";
import NavLink from "../../components/NavLink";

// TODO: Re-write this. Taken from https://www.emgoto.com/react-table-of-contents/

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<any[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

interface TOCItem {
  id: "initial-header",
  title: "Initial header",
  items?: TOCItem[]
}

interface TableOfContentsProps {
  items: TOCItem[]
}

const Headings = ({ headings }) => (
  <ul className="my-2">
    {headings.map((heading: TOCItem) => (
      <li key={heading.id}>
        <NavLink name={heading.title} href={`#${heading.id}`} />
        {heading.items && heading.items.length > 0 && (
          <ul className={markdownUL}>
            {heading.items.map((child) => (
              <li key={child.id}>
                <NavLink name={child.title} href={`#${child.id}`} />
                <a ></a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export function TableOfContents() {
  const { nestedHeadings } = useHeadingsData();

  return (
    <nav
      className="min-h-full w-96 py-8 px-2 space-y-1 border-l border-border"
      aria-label="Table of contents">
      <p className={`font-bold pl-3`}>On this page:</p>

      <Headings headings={nestedHeadings} />
    </nav>
  );
}

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

export default function PostPage({ source, frontMatter, content }) {
  const title = frontMatter.title;
  const description = frontMatter.description;

  return (
    <Layout toc={<TableOfContents />}>
      <PageProse title={title} description={description}>
        <Markdown>
          {content}
        </Markdown>
      </PageProse>
    </Layout>
  );
}
