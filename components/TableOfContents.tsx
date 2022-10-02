import { useEffect, useState } from "react";
import { markdownUL } from "./Markdown";
import NavLink from "./NavLink"

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

export default function TableOfContents() {
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