import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} to='/'>
            home
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} to='/'>
            about
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} to='/'>
            events
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} to='/'>
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
