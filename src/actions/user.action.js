import  Auth  from '../firebase/index'
import { userConstants } from '../constants/user.constans'

export const logout = () => {
  return async function action(dispatch) {
    dispatch({ type: userConstants.LOGOUT_REQUEST })
    try {
      await Auth.signOut()
      dispatch({ type: userConstants.LOGOUT_SUCCESS, status: false })
    } catch (e) {
      dispatch({ type: userConstants.LOGOUT_FAILURE, status: false, error_msg: e.message  })
    }
  }
}

export const login = (email, password) => {
  return async function action(dispatch) {
    dispatch({ type: userConstants.LOGIN_REQUEST, status: false })
    try {
      await Auth.signInWithEmailAndPassword(email, password)
      dispatch({ type: userConstants.LOGIN_SUCCESS, status: true })
    } catch (e) {
      dispatch({ type: userConstants.LOGIN_FAILURE, status: false, error_msg: e.message  })
    }
  }
}

export const checkLogin = () => {
  return async function action(dispatch) {
    try {
      await Auth.onAuthStateChanged(user => {
        if(user){
          dispatch({ type: userConstants.CHECK_LOGIN, status: true })
        }
        else{
          dispatch({ type: userConstants.CHECK_LOGIN, status: false })
        }
      })
    } catch (e) {
      dispatch({ type: userConstants.CHECK_LOGIN, status: false })
    }
  }
}