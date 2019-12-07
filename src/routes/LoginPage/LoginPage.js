import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div className='LoginPage'>
                <div className='login_form_container'>
                    <h2 className='log_title'>Login</h2>
                    <LoginForm {...this.props} />
                </div>
            </div>
        )
    }
}