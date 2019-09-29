import React, { Component } from 'react';

import Button from 'antd/es/button';
import { Link } from 'react-router-dom'

class Home extends Component{
  render(){
    return(
      <div className = "container"> 
        <div className = "center-screen">
          <Link to = "/login"> 
            <Button type="primary" > Go to Login </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;