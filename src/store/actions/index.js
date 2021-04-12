import groups from '../../data/dummy'
import { TYPES } from '../constants/constants'

export const search_word = () => {
  return {
    type: TYPES.SEARCH_WORD
  }
}

export const searched_word = (searchResult) => {
  return {
    type: TYPES.SEARCHED_WORD,
    payload: searchResult
  }
}

export const receive_error = () => {
  return {
    type: TYPES.RECEIVE_ERROR
  }
}

export const searchText = (searchTerm) => (dispatch) => {
  dispatch(search_word())

  const result = groups.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm)
  })

  console.log("result", result);
  if(result.length === 0) {
      alert("No match found")
  } else if(result.length > 0) {
    setTimeout(() => {
      dispatch(searched_word(result))
    }, 1000);
  } else {
    dispatch(receive_error())
  }
}