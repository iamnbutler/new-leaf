import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { ExternalIcon } from "./Icon";
import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const navLinkActive = "text-blue"
export const navLinkInactive = "text-secondary"
export const navLinkCommon = "group flex items-center pl-3 pr-8 py-2 space-x-3 rounded-lg text-md font-bold opacity-80 hover:opacity-100"

interface NavLinkProps {
  href: string,
  name: string,
  icon?: React.ReactNode,
  external?: boolean
}

export default function Link({ href, name, icon, external = false }: NavLinkProps) {
  let current = useRouter().asPath === href;

  return (
    <NextLink href={href} className={
      classNames(
        current
          ? navLinkActive
          : navLinkInactive,
        navLinkCommon
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
    </NextLink>
  );
}
