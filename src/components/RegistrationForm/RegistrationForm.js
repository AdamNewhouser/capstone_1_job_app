import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ProfileContext from '../../contexts/ProfileContext'

export default class RegistrationForm extends Component {
    state = { error: null }

    static contextType = ProfileContext

    setToWelcome = (user) => {
        this.props.history.push(`/welcome`)
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, phone, user_name, password, user_type } = e.target
        console.log(e.target.email.value)
        this.setState ({ error: null })
        AuthApiService.postUser({
            email: email.value,
            phone: phone.value,
            user_name: user_name.value,
            password: password.value,
            user_type: user_type.value
        })
            .then(user => {
                email.value = ''
                phone.value = ''
                user_name.value = ''
                password.value = ''
                this.context.setUserType(user.user_type)
                this.context.setUserId(user.userId)
                this.setToWelcome(user)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        return (
            <form className='RegistrationForm' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='user_type'>
                    <label htmlFor="Registration__user_type">Type of user</label>
                    <select name='user_type' id='Registration__user_type' required>
                        <option value=''>What type of user are you?</option>
                        <option value='candidate'>Candidate</option>
                        <option value='employer'>Employer</option>
                    </select>
                </div>
                <div className= 'reg_user_name'>
                    <label htmlFor='RegistrationForm__full_name'>Full name</label>
                    <input name='user_name' type='text' id='RegistrationForm__user_name' required></input>
                </div>
                <div className='reg_email'>
                    <label htmlFor='RegistrationForm__email'>Email</label>
                    <input name='email' type='text' id='RegistrationForm__email' required></input>
                </div>
                <div className='reg_password'>
                    <label htmlFor='RegistrationForm__password'>Password</label>
                    <input name='password' type='password' id='Registration__password' required></input>
                </div>
                <div className='reg_phone'>
                    <label htmlFor='RegistrationForm_phone'>Phone</label>
                    <input name='phone' type='text' id='RegistrationForm_phone' required></input>
                </div>
                <button type='submit'>Register</button>
            </form>
        )
    }
}