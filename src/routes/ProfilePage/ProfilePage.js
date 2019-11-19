import React, { Component } from 'react'
import ProfileEducation from '../../components/ProfileEducation/ProfileEducation'
import ProfileEmpHistory from '../../components/ProfileEmpHistory/ProfileEmpHistory'
import ProfileContact from '../../components/ProfileContact/ProfileContact'

export default class ProfilePage extends Component {
    render() {
        return (
                <div className='Profile__container'>
                    <div className='Profile__image' style={{backgroundImage: `url`}}/>
                    <div className='Profile__personal'>
                        <h2>Full Name</h2>
                        <p>Hello, I am Full Name. Welcome to my profile!</p>
                        <p>Location: State Name</p>
                        <p>Job Field: Industry Name</p>
                    </div>
                    <ProfileEducation />
                    <ProfileEmpHistory />
                    <ProfileContact />
                </div> 
        )
    }
}