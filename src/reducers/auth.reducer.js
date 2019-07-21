import { userConstants } from '../constants/user.constans'
import  Auth  from '../firebase/index'

const initialState = []

async function checkLogin () {
  let user = await Auth.currentUser
  console.log(user)
  return user ? true : false 
}

async function getLoginFirebase (user) {
  let status = await Auth.signInWithEmailAndPassword(user.email, user.password)
  return status
}

async function getLogoutFirebase () {
  try{
    await Auth.signOut()
    return false
  } 
  catch(e){
    return true
  }
}

export default (state = initialState, action) => {
  let status;
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      status =  checkLogin() ? true : getLoginFirebase(action.user)
       state = {
        ...state,
        user: action.user,
        isLogin: status
      }
      console.log(state)
      return state
    case userConstants.LOGOUT:
      status = getLogoutFirebase()
      console.log(status)
      state =  {
        ...state,
        isLogin: status
      };
      console.log(state)
      return state
  
    default:
      return state
  }
}
  

