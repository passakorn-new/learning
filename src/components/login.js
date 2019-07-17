import React, { Component } from 'react';
import { Route, Link  } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component{
  render(){
    return(
      <div className = "login-component"> 
        <div className = "center-screen">
          <h4> Login Page</h4>
        </div>
      </div>
    );
  }
}
export default Login;