import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const renderData = (results) => (
  results.length > 0 && results?.map(result => (
    <>
      <p>Search Results</p>
      <section>
        <div key={result.title} className="result">
          <div className="title">{result.title}</div>
          <div>
            <span>{result?.author?.firstName} {result?.author?.surname}</span>
          </div>
        </div>
      </section>
    </>
  ))
)

const Results = () => {
  const {searchResult, isFetching, isError } = useSelector(state => state.search)
  
  return (
    <Results.Container>
      {isFetching && <p>loading ...</p>}
      {isError && <p>Please enter a longer text</p>}
      {renderData(searchResult)}
    </Results.Container>
  )
}

Results.Container = styled.div`
  padding: 0 2rem;
  
  section {
    .result {
      display: flex;
      padding: 0.5rem;
      border: 2px solid black;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    div span {
      margin: 0 0.2rem;
    }
  }
`

export default Results