import React from 'react'
import './ProfileEducation.css'

export default class ProfileEducation extends React.Component {
    
    render() {
    return (
        <div className='profile_education'>
            <h3 className='ed_title'>Education</h3>
            <h4 className='ed_h4'>{this.props.profile.school_name}</h4>
            <p className='ed ed_degree'>{this.props.profile.degree}</p>
            <p className='ed ed_length'>{this.props.profile.length_of_enrollment}</p>
            <p className='ed ed_location'>{this.props.profile.location}</p>
        </div>
    )
    }
}

