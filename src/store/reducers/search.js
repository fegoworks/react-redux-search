import { TYPES } from '../constants/constants'

const initialState = {
  searchResult: {},
  isFetching: false,
  isError: false
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.SEARCH_WORD:
      return {
        ...state,
        isFetching: true,
        searchResult: {},
        isError: false
      }
    case TYPES.SEARCHED_WORD:
      let searchResult = action.payload ? action.payload : null
      return {
        ...state,
        isFetching: false,
        searchResult,
        isError: false
      }
    case TYPES.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    default:
      return state
  }
}

export default searchReducer