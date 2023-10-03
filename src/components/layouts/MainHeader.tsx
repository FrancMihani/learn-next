import Link from 'next/link'
import classes from './MainHeader.module.css'
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next Events</Link>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse all Events</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
