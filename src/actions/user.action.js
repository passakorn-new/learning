import { userConstants } from '../constants/user.constans'

export const login = (email, password) => ({
  type: userConstants.LOGIN_REQUEST,
  user: {
    email: email,
    password: password
  }
})

export const logout = (email) => ({
  type: userConstants.LOGOUT,
  user: {
    email: email
  }
})