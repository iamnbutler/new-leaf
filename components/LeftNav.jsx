import {
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { InvaderIcon } from "./icons/invader";
import NavLink from "./NavLink";

const navigation = [
  {
    name: "Imagining Worlds with DALL-E",
    href: "/posts/worlds-with-dalle",
    icon: <InvaderIcon className="w-4 h-4" />,
  },
  {
    name: "Figma art with Automator",
    href: "/posts/art-with-automator",
    icon: <CpuChipIcon className="w-4 h-4" />,
  },
];

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
      <ul className="pt-4 border-t border-border">
        <li>
          <NavLink
            name="About this site"
            href="https://github.com/iamnbutler/new-leaf/blob/main/README.md"
          />
          <NavLink
            name="Fix something"
            href="https://github.com/iamnbutler/new-leaf/pulls"
          />
          <NavLink
            name="Release notes"
            href="https://github.com/iamnbutler/new-leaf/releases"
          />
        </li>
      </ul>
    </nav>
  );
}
