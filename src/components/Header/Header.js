import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import ProfileContext from '../../contexts/ProfileContext'
import './Header.css'

export default class Header extends Component {
    state = {
        toggleLogging: false
    }

    static contextType = ProfileContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.clearAuthToken()
        this.setState({ toggleLogging: false })
    }

    handleLoginClick = () => {
        this.setState({ toggleLogging: true })
    }

    renderLogoutLink = () => {
        return (
            <div className='header__logout'>
                <Link onClick={this.handleLogoutClick} to='/'>
                    <button type='button' className='a_log logout'>Logout</button>
                </Link>
                <Link to='/listings'>
                    <button type='button' className='a_log listings'>Listings</button>
                </Link>
                <Link to={`/profiles/${this.context.profile.id}`} >
                    <button type='button' className='a_log myprofile'>My Profile</button>
                </Link>
            </div>
        )
    }

    renderLoginLink = () => {
        return (
            <div className='header__login'>
                <Link to='/login' className='a_log login'>Login</Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header'>
                <div className='header-container'>
                    <Link to='/' className='header_title'>
                        <h1 className='header_h1'>Job App</h1>
                    </Link>
                    <div className='header__tagline'>Network, Search Listings, One-Click Apply!</div>
                    {this.context.authToken ? this.renderLogoutLink() : this.renderLoginLink()}
                </div>
            </nav>
        )
    }
}