import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { searchText } from '../store/actions'

const Search = () => {
  const [textInput, setTextInput] = useState('')
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if(textInput.length > 2) {
      dispatch(searchText(textInput))
    } else {
      alert("Text too short")
    }
  }

  return (
    <Search.Wrapper>
      <h2 className="main_header">Search<span className="dot">.</span></h2>
      <p className="sub_header"><span>HowdyLearning</span> searching for random names</p>
      <form className='search'>
        <input autoFocus placeholder="Enter some random text" value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </Search.Wrapper>
  )
}

Search.Wrapper = styled.div`
  .main_header {
    margin: 2.55rem 0 1.5rem 0;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 300;

    .dot {
      color: #c92828
    }
  }

  .sub_header {
    text-align: center;
    font-size: .95rem;
    font-weight: 500;
    color: #95a195;

    span {
      color: #242524;
    }
  }

  .search {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    input {
      padding: 0.75rem;
      margin: 1rem 2rem 1rem 0;
      width: 100%;
      border-radius: 0.2rem;
    }

    button {
      padding: 0.5rem 0.8rem;
      margin: 1rem 0;
      color: white;
      background: #c92828;
      cursor: pointer;
      border-radius: 0.2rem;
    }
  }
`

export default Search;