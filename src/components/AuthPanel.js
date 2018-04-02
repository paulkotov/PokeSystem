import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';
import { isObjEmpty } from '../libs/api';
import SocialContainer from './SocialContainer';

import 'antd/lib/button/style/index.css';
import 'antd/lib/style/index.css';

class AuthPanel extends Component {
  
  constructor(){
    super();
    this.state = {
      profile: {}
    };
  }

  RenderSocial = () => (
    <SocialContainer className="unauthorized" />
  );
  
  RenderAuth = () => (
    <div className="authorized">
      Loged in as: <strong>{this.props.profile.name}</strong>
      <Button onClick={this.OnLogoutHandler}>LogOut</Button>  
    </div>
    );

  OnLogoutHandler = () => {
    this.props.logout();
  };

  render(){
    const { profile } = this.props;
    // console.log(profile);
    return (
      <div>
        { isObjEmpty(profile) ? this.RenderSocial() : this.RenderAuth() } 
      </div>
    );
  }
}

AuthPanel.propTypes = {
  profile: PropTypes.object,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default AuthPanel;
