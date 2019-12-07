import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    state = { error: null }

    static contextType = ProfileContext

    loginToWelcome = (email, password) => {
        AuthApiService.postLogin({
            email: email,
            password: password
        })
            .then(res => {
                this.context.setAuthToken(res.authToken)
                this.props.history.push(`/welcome`)
            })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, phone, user_name, password, user_type } = e.target
        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value,
            phone: phone.value,
            user_name: user_name.value,
            password: password.value,
            user_type: user_type.value
        })
            .then(user => {
                console.log(user)
                email.value = ''
                phone.value = ''
                user_name.value = ''
                this.context.setUserType(user.user_type)
                this.context.setUserId(user.id)
                this.loginToWelcome(user.email, password.value)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        return (
            <form className='RegistrationForm' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='user_type'>
                    <select name='user_type' id='Registration__user_type' required>
                        <option value=''>What type of user are you?</option>
                        <option value='candidate'>Candidate</option>
                        <option value='employer'>Employer</option>
                    </select>
                </div>
                <div className='reg_user_name'>
                    <input name='user_name' type='text' id='RegistrationForm__user_name' className='reg' placeholder='Full Name' required></input>
                </div>
                <div className='reg_email'>
                    <input name='email' type='text' id='RegistrationForm__email' className='reg' placeholder='Email'required></input>
                </div>
                <div className='reg_password'>
                    <input name='password' type='password' id='RegistrationForm__password' className='reg' placeholder='Password'required></input>
                </div>
                <div className='reg_phone'>
                    <input name='phone' type='text' id='RegistrationForm_phone' className='reg' placeholder='Phone' required></input>
                </div>
                <button type='submit' className='reg_button'>Create Account</button>
            </form>
        )
    }
}