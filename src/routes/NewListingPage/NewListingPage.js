import React, { Component } from 'react'
import NewListingForm from '../../components/NewListingForm/NewListingForm'
import ProfileContext from '../../contexts/ProfileContext'
import './NewListingPage.css'
import LoginPage from '../LoginPage/LoginPage'


export default class CreateListingPage extends Component {
    static contextType = ProfileContext
    render() {
        if (!this.context.userId) {
            return <LoginPage />
        } else {
            if (this.context.userType !== 'employer')
            return <div>You do not have permission to view this page</div>
        }
        return (
            <div className='NewListingPage'>
                <h2 className='newlistPage_title'>Create New Listing</h2>
                <NewListingForm {...this.props}/>
            </div>
        )
    }
}