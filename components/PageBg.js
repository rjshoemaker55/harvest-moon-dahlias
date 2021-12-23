import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const PageBg = (props) => {
  const [scrollPos, setScrollPos] = useState(-365)

  const background = useRef()

  const handleScroll = () => {
    const position = window.pageXOffset
    setScrollPos(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  const PageBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(
      ${scrollPos / 8}deg,
      rgb(231, 113, 125),
      rgb(232, 160, 112),
      rgb(232, 218, 113)
    );
  `

  return (
    <>
      <Navbar color='rgba(255, 255, 255, 1)' />
      <PageBackground ref={background} />
    </>
  )
}

export default PageBg
