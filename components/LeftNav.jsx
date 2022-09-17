import { AcademicCapIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const navigation = [
  {
    name: "Art with Automator",
    href: "/posts/art-with-automator",
    icon: <CpuChipIcon className="w-4 h-4" />,
  },
  {
    name: "Design Docs",
    href: "/posts/design-docs",
    icon: <AcademicCapIcon className="w-4 h-4" />,
  },
];

export default function LeftNav() {
  return (
    <nav
      className="min-h-full py-8 mx-2 space-y-1 border-r w-96 border-base03"
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
      <ul className="pt-4 border-t border-base03">
        <li>
          <NavLink
            name="About this site"
            href="https://github.com/iamnbutler/design-docs/blob/main/README.md"
          />
          <NavLink
            name="Fix something"
            href="https://github.com/iamnbutler/design-docs/blob/main/CONTRIBUTING.md"
          />
          <NavLink
            name="Release notes"
            href="https://github.com/iamnbutler/design-docs/releases"
          />
        </li>
      </ul>
      <div className="flex flex-col px-3 py-2 space-y-2 text-sm opacity-50 group text-base04 hover:opacity-100">
        <p>Some text on the liscense.</p>
        <a
          href="https://github.com/iamnbutler/design-docs/blob/main/LICENSE"
          className="underline hover:text-base08"
        >
          CC-SOME-LISCENSE
        </a>
      </div>
    </nav>
  );
}
