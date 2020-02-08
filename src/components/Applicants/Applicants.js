import React, { useState, useEffect } from 'react'
import ProfileApiService from '../../services/profile-api-service'
import ProfileFromListings from '../../routes/ProfileFromListings/ProfileFromListings'
import './Applicants.css'

export default function Applicants(props) {
    const [profiles, setProfiles] = useState([])
    const [profileId] = useState(profiles[0])
    const [error, setError] = useState(null)

    useEffect(() => {
        props.applicants.forEach(applicant => {
            ProfileApiService.getMicroProfile(applicant.profile_id, props.listing.id)
                .then(res => {
                    setProfiles([...profiles, res])
                })
                .catch(setError)
        })
    }, [profileId])

    const renderApplicantProfile = (profile) => {
        props.history.push(`/applicant_profiles/${profile.id}`)
    }

    const renderApplicants = () => {
        return (
            profiles.map(profile => {
                return (
                    <li key={profile.id} className='applicant-results' onClick={() => renderApplicantProfile(profile)}>
                        <div className='link-container'>
                            <h3 className='applicant applicant_name'>{profile.name}</h3>
                            <p className='applicant applicant_tag'>{profile.profile_tag}</p>
                            <p className='applicant applicant_industry'>Field: {profile.primary_industry}</p>
                        </div>
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