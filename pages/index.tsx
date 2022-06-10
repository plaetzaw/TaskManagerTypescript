import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  background-color: ${props => props.theme.myTheme.colorsDark.DarkGrayishBlue};
  padding: ${props => props.theme.padding};
  color: ${(props) => {
    console.log(props.theme.myTheme.colorsDark)
  }}
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Task Manager</title>
      </Head>
      <Container>
        Hello Whirls
      </Container>
    </div>
  )
}

export default Home
