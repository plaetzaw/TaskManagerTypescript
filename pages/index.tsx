import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'



const Container = styled.div<DisplayModeProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${props => props.theme.primaryTheme.padding};
  margin: ${props => props.theme.primaryTheme.margin};
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkBlue};
  color: ${props => props.theme.primaryTheme.lightMode.LightGrayishBlue}
`

const Background = styled.div<DisplayModeProps>`
  width: 100%;
  height: 200px;
  background-image: url${props => !props.darkMode ? '(/bg-mobile-light.jpg)' : '(/bg-mobile-dark.jpg)'};
  background-repeat: no-repeat;
  object-fit: cover;
  @media (min-width: 1200px) {
    background-image: url${props => !props.darkMode ? '(/bg-desktop-light.jpg)' : '(/bg-desktop-dark.jpg)'};
  } 
`

interface DisplayModeProps {
  darkMode: boolean,
}

interface Toggle {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  console.log('darkmode?', darkMode)


  const toggleMode: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  // color: ${(props) => {
  //   console.log(props.theme.primaryTheme.darkMode)
  // }}
  return (
    <div>
      <Head>
        <title>Task Manager</title>
      </Head>
      <Container darkMode={darkMode}>
        <button toggle={darkMode} onClick={toggleMode}>Toggle</button>
          <Background darkMode={darkMode}>
            HelloWhiril
          </Background>
        {/* Todo + Mode Changer */}
        {/* Todos */}
      </Container>
    </div>
  )
}

export default Home
