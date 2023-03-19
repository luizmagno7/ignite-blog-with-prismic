import Link, { LinkProps } from "next/link"

import { Logo } from "../Logo";

import styles from './header.module.scss'

export default function Header() {
  return (
    <header role="navigation" className={styles.headerContent}>
      <div className={styles.brand}>
        <Logo />

        <h1>Square.News</h1>
      </div>

      <nav aria-label="Main Menu">
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  )
}
