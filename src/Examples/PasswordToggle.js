import React, { Component } from 'react'

export default class PasswordToggle extends Component {
    constructor(){
        super();
        this.state = {
            isShowPass:false
        };
    }

    handlepassword = e => {
        e.preventDefault(); 
        let isShowPass = this.state.isShowPass;
        this.setState({ isShowPass : !isShowPass });
    }

  render() {
    return (
      <div>
            <label>Password</label>
            <div className="input-group input-group-merge">
                <input type={this.state.isShowPass ? 'text' : 'password'}
                    className={`form-control form-control-lg`}
                    onChange={this.handleFormFieldsChange}
                    name="textboxPassword"
                    id="textboxPassword"
                />
                <a className="input-group-append input-group-text">
                    <img src={this.state.isShowPass ? './assets/img/eye.svg' : './assets/img/eye-slash.svg' } 
                    onClick={this.handlepassword} />
                </a>
            </div>

            {/* <div>
            <i className="bi-eye-slash" onClick={this.handlepassword} id="passIcon"></i>
            </div> */}
      </div>
    )
  }
}
