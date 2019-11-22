import React, { Component } from 'react'
import { Link } from'react-router-dom'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import ProfileApiService from '../../services/profile-api-service'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { 
        profileId: null,
        error: null 
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { email, password } = e.target
        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }


    render() {
        return (
            <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                <div className="email">
                    <label htmlFor='LoginForm__email'>Email</label>
                    <input onChange={this.handleProfileIdUpdate} required type='text' name='email' id='LoginForm__email'></input>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm__password'>Password</label>
                    <input required type='password' name='password' id='LoginForm__password' required></input>
                </div>
                <button type='submit' >Login</button>
            </form>
        )
    }
}