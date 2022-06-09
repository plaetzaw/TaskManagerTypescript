import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
