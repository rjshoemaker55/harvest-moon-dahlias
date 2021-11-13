import Link from 'next/link'
import styled from 'styled-components'
import styles from '../styles/Navbar.module.scss'
import HarvestMoonLogo from './HarvestMoonLogo'

const Navbar = (props) => {
  const NavbarLink = styled.a`
    font-size: 26px;
    padding: 2px 0;
    color: ${props.color};
    transition-duration: 0.3s;
    border-bottom: rgb(232, 112, 125);

    &:hover {
      opacity: 1;
      border-bottom: rgb(232, 112, 125) solid 3px;
    }
  `
  //

  return (
    <nav className={styles.navbarWrapper}>
      <HarvestMoonLogo
        color='rgba(255, 255, 255, .8)'
        width='200'
        class='indexLogo'
      />
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href='/' passHref>
            <NavbarLink>home</NavbarLink>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href='#aboutus' passHref>
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
