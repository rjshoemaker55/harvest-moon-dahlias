import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import PageBg from '../components/PageBg'
import styles from '../styles/Index.module.scss'

export default function Index() {
  const aboutPage = useRef()

  return (
    <div className={styles.container}>
      <Head>
        <title>Harvest Moon Dahlias | Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.indexWideWrapper}>
        <Home
          scrollPage={() =>
            aboutPage.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <About aboutRef={aboutPage} />
      </div>
    </div>
  )
}
