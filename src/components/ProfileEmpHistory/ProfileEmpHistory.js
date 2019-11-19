import React, { Component } from 'react'

export default class ProfileEmpHistory extends Component {
    render() {
        return (
            <div className='Profile_education'>
                <h3>Employment History</h3>
                <h4>Company Name</h4>
                <p>Job Title</p>
                <p>Duration</p>
                <p>Supervisor: Super Name (555-555-5555)</p>
            </div>
        )
    }
}