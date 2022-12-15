import NavLink from "./NavLink";
import { posts } from "./post/Posts";

const metaNav = [
  {
    title: "View on Github",
    url: "https://github.com/iamnbutler/new-leaf"
  },
  {
    title: "Pull Requests",
    url: "https://github.com/iamnbutler/new-leaf/pulls"
  },
]

export default function LeftNav() {
  return (
    <nav
      className="min-h-screen space-y-1"
      aria-label="Sidebar"
    >
      <div className="py-4 space-y-px">
        {posts.map((item) => (
          <NavLink
            item={item}
            key={item.uuid}
          />
        ))}
      </div>
      <menu className="py-4 space-y-px flex flex-col">
        {metaNav.map((item) => (
          <a
            href={item.url}
            key={item.url}
            className="space-y-[6px] max-w-[360px] px-3 mx-2 py-2 rounded font-mono
            bg-transparent hover:bg-surface text-sm text-secondary"
          >
            {item.title}
          </a>
        ))}
      </menu>
    </nav>
  );
}
