import React, { Component } from 'react';
// import { login } from '../actions/index'
import { Route, Link  } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { connect } from 'react-redux'
import { login, logout } from '../actions/user.action'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => { dispatch(login(email, password)) },
  logout: () => { dispatch(logout()) }
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
    
    this.state = {
      email: '',
      password: ''
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

  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.auth)
  //   return this.props.auth !== nextProps.auth;
  // }

  render(){
    let { email, password } = this.state
    return(
      <div className = "login-component"> 
        <div className = "center-screen container col-4">
          <h4> Login </h4>
          <br/>
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
              <Button type="primary col-2 " htmlType="submit" > Login </Button> 
              <Button type="primary col-2 offset-8" htmlType="button" onClick = {this.handleLogout} > Logout </Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)