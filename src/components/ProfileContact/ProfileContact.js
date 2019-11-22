import React from 'react'

export default function ProfileContact(props) {
    const { email } = props.profile.email
    const { phone } = props.profile.phone
    return (
        <div className='Profile_contact'>
            <h3>Contact</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}