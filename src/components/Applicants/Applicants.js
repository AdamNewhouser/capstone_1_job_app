import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProfileApiService from '../../services/profile-api-service'

export default function Applicants(props) {
    const [profiles, setProfiles] = useState([])
    const [profileId] = useState(profiles[0])
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log(props.applicants)
        props.applicants.forEach(applicant => {
            ProfileApiService.getMicroProfile(applicant.profile_id)
                .then(res => {
                    console.log(res)
                    setProfiles([...profiles, res])
                })
                .catch(setError)
        })
    }, [profileId])

    const renderApplicants = () => {
        return (
            profiles.map(profile => {
                return (
                    <li key={profile.id} className='applicant-results'>
                        <Link className='link-container' to={`/profiles/${profile.id}`}>
                            <h3 className='applicant applicant_name'>{profile.name}</h3>
                            <p className='applicant applicant_tag'>{profile.profile_tag}</p>
                            <p className='applicant applicant_industry'>Field: {profile.primary_industry}</p>
                        </Link>
                    </li>
                )
            })
        )
    }
    let content
    if (error) {
        content =
            error.error === `No applicants exist` 
            ? (<p>No one has applied</p>) 
            : (<p>Cannot provide applicants at this time</p>)
    } else {
        content = renderApplicants()
    }
    return content
}