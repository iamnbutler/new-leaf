import Link from "next/link";
import React from "react";
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>Nate Butler</Link>
      <menu>
        <Link href={'/blog'}>blog</Link>
      </menu>
    </header>
  )
}