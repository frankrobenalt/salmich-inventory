import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            valid: false,
            email: ''
        }
    }

    validateEmail(email){
        if (email.includes('_') && email.includes('@usc.salvationarmy.org')){
            this.setState({
                valid: true,
                email
            })
        }
    }

    render(){
        return (
            <div className="login-wrapper">
                <div className="margin title">Enter Lotus Notes Email to Continue</div>
                <div className="button" onClick={()=> this.props.validEmail('Frank_Robenalt@usc.salvationarmy.org')}>Skip</div>
                <input className="login-input" type="text" onChange={(e)=>this.validateEmail(e.target.value)} />
                { this.state.valid ?
                <div className="button" onClick={()=> this.props.validEmail(this.state.email)}>Continue</div>
                :
                <div className="button-disabled">Continue</div>
                }
            </div>
        )
    }
}