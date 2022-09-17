import NextLink from "next/link";
import { GithubIcon } from "./Icon";

const tools = [
  {
    name: "Nate on Github",
    href: "https://github.com/iamnbutler",
    icon: <GithubIcon />,
  },
];

export default function TopNav() {
  return (
    <nav className="flex justify-between px-6 py-1">
      <div className="flex items-center space-x-4 grow">
        <NextLink href="/">
          <a className="block py-2 font-serif italic font-black opacity-100 text-md text-base0A hover:opacity-80">
            🌱 Nate Butler
          </a>
        </NextLink>
      </div>
      <div className="flex items-center space-x-4 text-base06">
        {/* TODO: Add tooltips to tools */}
        {tools.map((tool) => (
          <a
            href={tool.href}
            title={tool.name}
            key={tool.name}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-8 h-8 space-x-2 border rounded-lg bg-base00 hover:opacity-80 border-base04/10 text-md text-base06 drop-shadow-md"
          >
            {tool.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
