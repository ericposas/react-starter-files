import { combineReducers } from 'redux'
import testReducer from '../Reducers/testReducer'

export default combineReducers({
  testResult: testReducer
})
