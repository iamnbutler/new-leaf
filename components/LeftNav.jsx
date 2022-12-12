import NavLink from "./NavLink";
import { allPosts } from "contentlayer/generated"

export default function LeftNav() {
  return (
    <nav
      className="min-h-screen space-y-1"
      aria-label="Sidebar"
    >
      <div className="py-4 space-y-px">
        {allPosts.map((item) => (
          <NavLink
            item={item}
            key={item.uuid}
          />
        ))}
      </div>
    </nav>
  );
}
