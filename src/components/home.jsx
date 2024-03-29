import React from 'react'
import styled from 'styled-components'
import Results from './Results'
import Search from './Search'

const Home = () => (
  <Home.Container>
    <Search/>
    <Results/>
  </Home.Container>
)

Home.Container = styled.div`
  font-family: 'Recursive', sans-serif;
  margin: 0 12.5rem;
  padding: 0 2rem;
`
export default Home