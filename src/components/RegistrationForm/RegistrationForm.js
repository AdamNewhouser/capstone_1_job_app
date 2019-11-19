import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    render() {
        return (
            <form className='RegistrationForm'>
                <div className='type_user'>
                    <label htmlFor="Registration__type_user">Type of user</label>
                    <select name='type_user' id='Registration__type_user' required>
                        <option value=''>What type of user are you?</option>
                        <option value='candidate'>Candidate</option>
                        <option value='employer'>Employer</option>
                    </select>
                </div>
                <div className= 'full_name'>
                    <label htmlFor='Registration__full_name'>Full name</label>
                    <input name='full_name' type='text' id='RegistrationForm__full_name'></input>
                </div>
                <div className='email'>
                    <label htmlFor='RegistrationForm__email'>Email</label>
                    <input name='email' type='text' id='RegistrationForm__email'></input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>Password</label>
                    <input name='password' type='password' id='Registration__password' required></input>
                </div>
                <button type='submit'>Register</button>
            </form>
        )
    }
}