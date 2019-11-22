import React from 'react'

export default function ProfileEducation(props) {
    return (
        <div className='Profile_education'>
            <h3>Education</h3>
            <h4>{props.profile.school_name}</h4>
            <p>{props.profile.degree}</p>
            <p>{props.profile.length_of_enrollment}</p>
            <p>{props.profile.location}</p>
        </div>
    )
}

