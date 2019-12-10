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
                <div className='demo_container'>
                    <span className='demo_span'>Demo Credentials:</span>
                    <span className='demo_span demo_candidate'>Candidate</span>
                    <span className='demo_span'>email: michaelscarn@hotmail.com</span>
                    <span className='demo_span'>password: michaelpassword123</span>
                    <span className='demo_span demo_candidate'>Employer</span>
                    <span className='demo_span'>email: hiring@dundermifflin.com</span>
                    <span className='demo_span'>password: dundermifflinpassword123</span>
                </div>
            </div>
        )
    }
}