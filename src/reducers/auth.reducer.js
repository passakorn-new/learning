import { userConstants } from '../constants/user.constans'
// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
    console.log(state)
      state = {
        ...state,
        user: action.user
      }
      console.log(state)
      return state
    case userConstants.LOGOUT:
      return {
        ...state
      };
  
    default:
      return state
  }
}

