import React from 'react'

export default function ProfileContact(props) {
    return (
        <div className='Profile_contact'>
            <h3>Contact</h3>
            <p>Phone: {props.profile.phone}</p>
            <p>Email: {props.profile.email}</p>
        </div>
    )
}