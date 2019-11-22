import React from 'react'

export default function ProfileEmpHistory(props) {
    return (
        <div className='Profile_education'>
            <h3>Employment History</h3>
            <h4>{props.profile.company_name}</h4>
            <p>{props.profile.job_title}</p>
            <p>{props.profile.length_of_duty}</p>
            <p>{props.profile.ed_location}</p>
            <p>Supervisor: {props.profile.supervisor_name} ({props.profile.supervisor_phone})</p>
        </div>
    )
}