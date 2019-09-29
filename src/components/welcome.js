import { Button, Row } from 'antd';
import React, { Component } from 'react';
import { checkLogin, login, logout } from '../actions/user.action'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => { dispatch(login(email, password)) },
  logout: () => { dispatch(logout()) },
  checkLogin: () => { dispatch(checkLogin()) }
})

class Welcome extends Component{

  constructor(props) {
    super(props);
    this.props.checkLogin()
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  getButtonLogout = (isLogin) =>{
    let buttonLogout
    if (isLogin) {
      buttonLogout = <Button type="primary col-2 offset-10" htmlType="button" onClick = {this.handleLogout} > Logout </Button>
    } else {
      buttonLogout = ''
    }
    return buttonLogout
  }

  render(){
    let { isLogin } = this.props.auth
    return(
      <div className = "login-component"> 
        <div className = "center-screen container col-4">
          <h4> Welcome  </h4>
          <br/>
            <Row> 
              {this.getButtonLogout(isLogin)}
            </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)