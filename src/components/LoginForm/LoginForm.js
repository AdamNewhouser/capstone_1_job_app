import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'


export default class LoginForm extends Component {
    state = {
        toProfile: false,
    }
    static contextType = ProfileContext

    setToProfile = res => {
        console.log(res)
        this.context.setProfile(res)
        console.log(this.context.profile)
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
                console.log(res)
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.context.setUserType(res.user_type)
                this.context.setUserId(res.userId)
                ProfileApiService.getProfile(res.userId)
                    .then(res => this.setToProfile(res))
                
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

   

    render() {
        return (
            <form className='LoginForm' onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
                <div className="email">
                    <label htmlFor='LoginForm__email'>Email</label>
                    <input required type='text' name='email' id='LoginForm__email'></input>
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