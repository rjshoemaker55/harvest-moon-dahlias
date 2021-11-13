import Head from 'next/head'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useRef, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import HarvestMoonLogo from '../components/HarvestMoonLogo'
import FlowersSvg from '../components/FlowersSvg'

export default function Home() {
  const [imageSize, setImageSize] = useState(200)
  const header = useRef()
  const flowersSvg = useRef()
  const subHeader = useRef()
  let instaImage = useRef([])

  useEffect(() => {
    gsap.from(header.current, {
      marginLeft: -300,
      opacity: 0,
      duration: 2
    })

    gsap.from(subHeader.current, {
      marginLeft: 300,
      opacity: 0,
      duration: 2
    })

    gsap.fromTo(
      flowersSvg.current,
      {
        bottom: '100%'
      },
      {
        bottom: 0,
        duration: 2,
        delay: 1.5,
        ease: 'bounce'
      }
    )

    gsap.from(instaImage.current, {
      marginLeft: -200,
      opacity: 0,
      duration: 2,
      delay: 2
    })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar color='rgba(255, 255, 255, 1)' />
      <div className={styles.indexPageWrapper}>
        <HarvestMoonLogo
          color='rgba(255, 255, 255, .8)'
          width='200'
          class='indexLogo'
        />
        <img
          className={styles.indexFlowersSvg}
          src='/images/flowers-svg.svg'
          ref={flowersSvg}
        />
        <div className={styles.indexContentWrapper}>
          <h1 className={styles.indexHeader} ref={header}>
            We know our dahlias.
          </h1>
          <h2 className={styles.indexSubheader} ref={subHeader}>
            Harvest Moon is a family owned, local Dahlia nursery in Howell, NJ.
          </h2>
          <div className={styles.indexImagesWrapper}>
            {/* <div ref={instaImage}>
              <Image
                className={styles.indexInstaImage}
                src='/images/instagram-images/insta-image1.png'
                width={imageSize}
                height={imageSize}
              />
            </div>
            <div ref={instaImage}>
              <Image
                className={styles.indexInstaImage}
                src='/images/instagram-images/insta-image2.png'
                width={imageSize}
                height={imageSize}
              />
            </div> */}
            {/* =
            <Image
              className={styles.indexInstaImage}
              src='/images/instagram-images/insta-image2.png'
              width={imageSize}
              height={imageSize}
              refs={instaImage}
            />
            <Image
              className={styles.indexInstaImage}
              src='/images/instagram-images/insta-image3.png'
              width={imageSize}
              height={imageSize}
              refs={instaImage}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
