import { userConstants } from '../constants/user.constans'

const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        isLogin: action.status,
        loading: false
      }
      return state
      
    case userConstants.LOGOUT_SUCCESS:
      state = {
        ...state,
        isLogin: action.status,
        loading: false
      }
      return state

    case userConstants.LOGIN_FAILURE:
      state = {
        ...state,
        isLogin: action.status,
        error_msg: action.error_msg,
        loading: false
      }
      return state

    case userConstants.CHECK_LOGIN:
        state = {
          ...state,
          isLogin: action.status,
          loading: false
        }
        return state


    case userConstants.LOGIN_REQUEST:
        state = {
          ...state,
          loading: true
        }
        return state
  
    default:
      return state
  }
}
  