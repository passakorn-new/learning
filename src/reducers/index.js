import auth from './auth.reducer.js'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  form: formReducer
})