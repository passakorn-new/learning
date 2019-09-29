import { applyMiddleware, createStore } from 'redux'

import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)
export default store