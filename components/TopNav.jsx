import Link from "next/link";
import { GithubIcon } from "./icons/github";
import { TwitterIcon } from "./icons/twitter";

const tools = [
  {
    name: "Nate on Twitter",
    href: "https://twitter.com/iamnbutler",
    icon: <TwitterIcon />,
  },
  {
    name: "Nate on Github",
    href: "https://github.com/iamnbutler",
    icon: <GithubIcon />,
  },
];

export default function TopNav() {
  return (
    <div className="fixed top-0 z-10 w-full font-mono">
      <nav className="flex justify-between px-6 py-1">
        <div className="flex items-center space-x-4 grow">
          <Link
            href="/"
            className="flex space-x-3 py-2 font-serif italic font-black opacity-100 text-md text-green hover:text-yellow"
          >
            <span className="flex">Nate Butler</span>
          </Link>
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
              className="flex items-center justify-center w-8 h-8 space-x-2 border rounded-lg bg-base hover:opacity-80 border-border text-md text-secondary drop-shadow-md"
            >
              {tool.icon}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
