import React from 'react'
import './ProfileEducation.css'

export default function ProfileEducation(props) {
    return (
        <div className='profile_education'>
            <h3>Education</h3>
            <h4>{props.profile.school_name}</h4>
            <p className='ed ed_degree'>{props.profile.degree}</p>
            <p className='ed ed_length'>{props.profile.length_of_enrollment}</p>
            <p className='ed ed_location'>{props.profile.location}</p>
        </div>
    )
}

