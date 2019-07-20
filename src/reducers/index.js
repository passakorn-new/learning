import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import auth from './auth.reducer.js'

console.log(auth)
export default combineReducers({
  auth,
  form: formReducer
})