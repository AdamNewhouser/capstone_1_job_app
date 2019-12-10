import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-container'>
                <div className='content-container'>
                <h2 className='landing-title'>Welcome to the Job App</h2>
                <p className='landing-tag'>Build your profile and find your next career!</p>
                <Link to='/registration'>
                    <button type='button' className='create_acct'>Create an account!</button>    
                </Link>
                <Link to='/login' className='try_out'>Try out the app! Demo credentials on the login page</Link>
                </div>
            </div>
        )
    }
}

export default LandingPage