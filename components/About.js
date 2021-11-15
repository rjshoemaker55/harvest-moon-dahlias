import Image from 'next/image'
import styles from '../styles/About.module.scss'

const About = (props) => {
  return (
    <div className={styles.aboutPage} id='aboutus' ref={props.aboutRef}>
      <div className={styles.aboutPageWrapper}>
        <h2 className={styles.aboutPageHeader}>Who we are</h2>
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutBlockWrapper}>
            <Image
              className={styles.aboutImage}
              src='/images/about-images/family.png'
              width={300}
              height={300}
              objectFit='cover'
            />
            <div className={styles.aboutBlockText}>
              <h3 className={styles.aboutBlockHeader}>
                We are a family owned, local dahlia nursery
              </h3>
              <p className={styles.aboutBlockBody}>
                Located in Howell, New Jersey, we work all through the year to
                care for our plants. We are constantly working to develop new,
                unique varieties, as well as preparing custom orders for
                clients' events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
