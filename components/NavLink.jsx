import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { ExternalIcon } from "./Icon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Link({ href, name, icon, external = false }) {
  let current = useRouter().asPath === href;

  return (
    <NextLink href={href} passHref>
      <a className={
        classNames(
          current
            ? "text-blue"
            : "text-secondary",
          "group flex items-center px-3 py-2 space-x-3 rounded-lg text-md font-bold opacity-80 hover:opacity-100"
        )
      } aria-current={current && "page"}>
        {icon && (
          <div
            className="p-1.5 flex items-center text-md rounded-lg space-x-2 border drop-shadow-md bg-surface border-border"
          >
            <span
            >
              {icon}
            </span>
          </div>
        )}

        <div>
          <span className="truncate">{name}</span>
          {external && (
            <span className="font-mono text-xs opacity-50">
              <ExternalIcon />
            </span>
          )}
        </div>
      </a>
    </NextLink>
  );
}
