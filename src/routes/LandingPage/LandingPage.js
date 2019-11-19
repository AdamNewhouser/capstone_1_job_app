import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-container'>
                <h2 className='landing-title'>Job App</h2>
                <p className='landing-tag'>A place to network and find your next career!</p>
                <Link to='/registration'>Create an Account</Link>
            </div>
        )
    }
}

export default LandingPage