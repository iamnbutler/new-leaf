import Link from "next/link";
import React from "react";

const navLink = {
  active: "",
  inactive: "",
  common: "flex py-1 px-2 w-full hover:bg-[var(--surface)] rounded"
}

const active = false

export default function Header() {
  return (
    <header className="flex flex-col">
      <Link href={'/'}>Nate Butler</Link>
      <menu className="mx-1">
        <Link
          href={'/blog'}
          className={`${navLink[active ? 'active' : 'inactive']} ${navLink.common}`}
        >
          blog</Link>
      </menu>
    </header>
  )
}