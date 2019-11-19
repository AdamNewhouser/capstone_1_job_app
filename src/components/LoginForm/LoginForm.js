import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <form className='LoginForm'>
                <div className="email">
                    <label htmlFor='LoginForm__email'>Email</label>
                    <input required type='text' name='email' id='LoginForm__email'></input>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm__password'>Password</label>
                    <input required type='password' name='password' id='LoginForm__password' required></input>
                </div>
                <button type='submit'>Login</button>
            </form>
        )
    }
}