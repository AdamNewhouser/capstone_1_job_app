import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import './LoginForm.css'


export default class LoginForm extends Component {
    state = {
        toProfile: false,
    }
    static contextType = ProfileContext

    setToProfile = res => {
        this.context.setProfile(res.profile)
        this.context.setImage(res['0'].image_url)
        this.props.history.push(`/profiles/${this.context.profile.id}`)
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        const { email, password } = e.target
        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.context.setAuthToken(res.authToken)
                this.context.setUserType(res.user_type)
                this.context.setUserId(res.userId)
                email.value = ''
                password.value = ''
                ProfileApiService.getProfileAfterLogin(res.userId, res.user_type)
                    .then(res => {
                        ProfileApiService.getProfile(res.profile.id, this.context.userId, this.context.userType)
                            .then(res => {
                                this.setToProfile(res)
                            })
                    })

            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }



    render() {
        return (
            <form className='LoginForm' onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
                <div className="email">
                    <input type='text' name='email' id='LoginForm__email' placeholder='Email' required></input>
                </div>
                <div className='password'>
                    <input type='password' name='password' id='LoginForm__password' placeholder='Password' required></input>
                </div>
                <button type='submit' className='log_button'>Login</button>
                <div className='to_register'>
                    <span className='signup_question'>Don't have an account?</span>
                    <Link to='/registration' className='signup_link'>Sign up here!</Link>
                </div>
            </form>
        )
    }
}