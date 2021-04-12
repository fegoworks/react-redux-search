import {combineReducers} from 'redux'
import searchReducer from './search';

const allReducers = combineReducers({
  search: searchReducer,
})

export default allReducers;