import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
    renderLogoutLink = () => {
        return (
            <div className='header__logout'>
                <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
            </div>
        )
    }
    
    renderLoginLink = () => {
        return (
            <div className='header__login'>
                <Link to='/login'>Log in</Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header'>
                <h1>
                    <Link to='/'>Job App</Link>
                </h1>
                <span className='header__tagline'>Network, Search Listings, One-Click Apply!</span>
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        )
    }
}