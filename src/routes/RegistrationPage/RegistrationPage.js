import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

export default class RegistrationPage extends Component {
    render() {
        return (
            <div className='RegistrationPage'>
                <h2 className='reg_page_title'>Sign Up!</h2>
                <RegistrationForm {...this.props} />
            </div>
        )
    }
}