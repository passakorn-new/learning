import { Button, Form, Input, Row } from 'antd';
import React, { Component } from 'react';
import { checkLogin, login, logout } from '../actions/user.action'

import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => { dispatch(login(email, password)) },
  logout: () => { dispatch(logout()) },
  checkLogin: () => { dispatch(checkLogin()) }
})

class Login extends Component{

  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    }),
  }

  constructor(props) {
    super(props);
    this.props.checkLogin()
    this.state = {
      email: 'test1@example.com',
      password: 'testtest'
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password)
    }
    this.setState ({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  getButtonLogin = (isLogin) =>{
    let buttonLogin
    if (isLogin) {
      buttonLogin = ''
    } else {
      buttonLogin = <Button type="primary col-2 " htmlType="submit" > Login </Button>;
    }
    return buttonLogin
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
    let { email, password } = this.state
    let { isLogin, loading } = this.props.auth

    return(
      <div className = "login-component"> 
        <div className = "center-screen container col-4">
          <h4> Login </h4>
          <br/>
          <Spin tip="Loading..." spinning={loading}>
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <Row> 
                <Input placeholder="Email" type = "email" onChange={this.handleChange} value = {email} name = "email"/> 
              </Row>
              <br/>
              <Row> 
                <Input placeholder="Password" type = "password" onChange={this.handleChange} value = {password} name = "password"/> 
              </Row>
              <br/>
              <Row> 
                {this.getButtonLogin(isLogin)}
                {this.getButtonLogout(isLogin)}
              </Row>
            </Form>
          </Spin>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)