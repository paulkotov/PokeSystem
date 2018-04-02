import React, { PropTypes, Component } from 'react';
import { Button } from 'antd';

import 'antd/lib/button/style/index.css';
import 'antd/lib/style/index.css';
import './Header.css';
//import { submittedData } from '../libs/api';
import { isObjEmpty, LoadOuterData, LoadDBData } from '../libs/api';

export default class Header extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    addData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    loadData: PropTypes.func.isRequired
  }
  
  constructor(){
    super();
    this.state = {
      count: 0,
      data: [],
      loginShow: false,
      fulldata: {}
    };
  }
  
  onAddHandler = () => {
    LoadOuterData().then( (result) => {
      this.setState(
        { count: result.count, 
          data: result.results }
        );
      this.props.addData(this.state.data);  
    }).catch(alert);   
  }

  onSavedDataHandler = () => {
    LoadDBData().then( (result) => {
      this.setState(
        { data: result }
      );
      this.props.loadData(result);
    }).catch((err)=>console.log(err));  
  }


  onDelHandler = () => {
    this.props.deleteData();
  }
  
  loadData = () => (
      <span className="load" >
        <p>My data<br/></p> 
        <Button onClick={this.onSavedDataHandler}>
          Saved
        </Button>
      </span>
    )
 
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h1 className="title">Decision mapper test task</h1>
        <div className="header">
          <span className="delete">
              <p>Load data<br/></p> 
              <Button className="add btn btn-default" 
              onClick={this.onAddHandler}>
              Load
            </Button>
          </span>
          <span className="add">
              <p>Delete data<br/></p>
              <Button className="btn btn-default" 
              onClick={this.onDelHandler}>
              Clear
              </Button>
          </span> 
            {isObjEmpty(profile) ? null : this.loadData()}
      </div>
    </div>
    );
  }
}
