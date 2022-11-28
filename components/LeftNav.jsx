import {
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import { InvaderIcon } from "./icons/invader";

const navigation = [
  {
    name: "Imagining Worlds with DALL·E",
    href: "/posts/dalle-worlds",
    icon: <InvaderIcon className="w-4 h-4" />,
  },
  {
    name: "Figma art with Automator",
    href: "/posts/art-with-automator",
    icon: <CpuChipIcon className="w-4 h-4" />,
  },
];

const notes = [
  {
    name: "Embedding Videos in Markdown",
    href: "/posts/embedding-videos-in-markdown"
  }
]

export default function LeftNav() {
  return (
    <nav
      className="min-h-full py-8 mx-2 space-y-1 border-r border-border"
      aria-label="Sidebar"
    >
      <div className="pb-4">
        {navigation.map((item) => (
          <NavLink
            name={item.name}
            href={item.href}
            icon={item.icon}
            key={item.href}
          />
        ))}
      </div>
      <div className="py-4 border-t border-border">
        <h2 className="flex items-center pl-3 pr-8 py-2 space-x-3 rounded-lg text-md font-sans text-secondary opacity-50">Notes</h2>
        {notes.map((item) => (
          <NavLink
            name={item.name}
            href={item.href}
            key={item.href}
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
