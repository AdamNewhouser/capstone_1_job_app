import React from 'react'
import './ProfileEducation.css'

export default function ProfileEducation(props) {
    return (
        <div className='profile_education'>
            <h3>Education</h3>
            <h4>{props.profile.school_name}</h4>
            <p>{props.profile.degree}</p>
            <p>{props.profile.length_of_enrollment}</p>
            <p>{props.profile.location}</p>
        </div>
    )
}

