import NavLink from "./NavLink";
import { allTextPosts } from "contentlayer/generated";

export default function LeftNav() {
  return (
    <nav
      className="min-h-screen py-8 mx-2 space-y-1 border-r border-border"
      aria-label="Sidebar"
    >
      <div className="pb-2">
        <h2 className="flex items-center pl-3 pr-8 pb-2 space-x-3 rounded-lg text-md font-sans text-secondary opacity-50">Notes</h2>
        {allTextPosts.map((item) => (
          <NavLink
            name={item.title}
            href={item.url}
            key={item.slug}
          />
        ))}
      </div>
      <ul className="pt-4 border-t border-border">
        <li className="opacity-50 hover:opacity-100">
          <NavLink
            name="About this site"
            href="https://github.com/iamnbutler/new-leaf/blob/main/README.md"
          />
        </li>
        <li className="opacity-50 hover:opacity-100">
          <NavLink
            name="Pull Requests"
            href="https://github.com/iamnbutler/new-leaf/pulls"
          />
        </li>

        <li className="opacity-50 hover:opacity-100">
          <NavLink
            name="Version History"
            href="https://github.com/iamnbutler/new-leaf/releases"
          />
        </li>

      </ul>
    </nav>
  );
}
