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
        this.setState({ toggleLogging: false })
    }
    
    handleLoginClick = () => {
        this.setState({ toggleLogging: true })
    }
    
    renderLogoutLink = () => {
        return (
            <div className='header__logout'>
                <Link onClick={this.handleLogoutClick} to='/' className='a_log'>Logout</Link>
                <Link to='/listings' className='a_log'>Listings</Link>
                <Link to={`/profiles/${this.context.userId}`} className='a_log'>My Profile</Link>
            </div>
        )
    }
    
    renderLoginLink = () => {
        return (
            <div className='header__login'>
                <Link to='/login' className='a_log'>Log in</Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header'>
                <h1>
                    <Link to='/' className='header_title'>Job App</Link>
                </h1>
                <span className='header__tagline'>Network, Search Listings, One-Click Apply!</span>
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        )
    }
}