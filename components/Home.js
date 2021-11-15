import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.scss'

const Home = (props) => {
  const header = useRef()
  const flowersSvg = useRef()
  const subHeader = useRef()

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
  }, [])

  return (
    <div className={styles.indexPageWrapper}>
      <img
        className={styles.indexFlowersSvg}
        src='/images/farm-girl.svg'
        ref={flowersSvg}
      />
      <div className={styles.indexContentWrapper}>
        <h1 className={styles.indexHeader} ref={header}>
          All we grow are Dahlias!
        </h1>
        <h2 className={styles.indexSubheader} ref={subHeader}>
          Harvest Moon is a family owned, local Dahlia nursery in Howell, NJ.
        </h2>
      </div>
      <div className={styles.scrollRightButtonWrapper}>
        <div className={styles.scrollRightButtonText}>who we are</div>
        <FontAwesomeIcon
          className={styles.scrollRightButton}
          icon={faAngleRight}
          onClick={props.scrollPage}
        />
      </div>
    </div>
  )
}

export default Home
