import React from 'react'
import './ProfileEmpHistory.css'

export default function ProfileEmpHistory(props) {
    return (
        <div className='profile_employment'>
            <h3 className='emp_title'>Employment History</h3>
            <h4>{props.profile.company_name}</h4>
            <p className='emp emp_job_title'>{props.profile.job_title}</p>
            <p className='emp emp_length'>{props.profile.length_of_duty}</p>
            <p className='emp emp_location'>{props.profile.ed_location}</p>
            <p className='emp emp_super'>Supervisor: {props.profile.supervisor_name} ({props.profile.supervisor_phone})</p>
        </div>
    )
}