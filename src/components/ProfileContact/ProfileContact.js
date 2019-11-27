import React from 'react'
import './ProfileContact.css'

export default function ProfileContact(props) {
    return (
        <div className='Profile_contact'>
            <h3>Contact</h3>
            <p className='con con_phone'>Phone: {props.profile.phone}</p>
            <p className='con con_email'>Email: {props.profile.email}</p>
        </div>
    )
}