import Link from 'next/link'
import styled from 'styled-components'
import styles from '../styles/Navbar.module.scss'

const Navbar = (props) => {
  console.log(props)
  const NavbarLink = styled.a`
    font-size: 26px;
    padding: 5px 0;
    color: ${props.color};
    transition-duration: 0.3s;

    &:hover {
      color: white;
    }
  `
  //

  return (
    <nav className={styles.navbarWrapper}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href='/' passHref>
            <NavbarLink>home</NavbarLink>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href='/' passHref>
            <NavbarLink>about</NavbarLink>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href='/' passHref>
            <NavbarLink>events</NavbarLink>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href='/' passHref>
            <NavbarLink>contact</NavbarLink>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
