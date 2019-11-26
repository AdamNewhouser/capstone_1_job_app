import React, { useState, useEffect } from 'react'
import ProfileEducation from '../../components/ProfileEducation/ProfileEducation'
import ProfileEmpHistory from '../../components/ProfileEmpHistory/ProfileEmpHistory'
import ProfileContact from '../../components/ProfileContact/ProfileContact'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import './ProfilePage.css'



export default function ProfilePage(props) {
    const [profile, setProfile] = useState({ id: null })
    const [profileId] = useState(props.match.params.profileId)
    const [error, setError] = useState(null)

    useEffect(() => {
        ProfileApiService.getProfile(profileId)
            .then(setProfile)
            .catch(setError)
        return () => {
            setProfile({ id: null })
        }
    }, [profileId])


    const renderProfile = () => {
        const value = {
            profile: profile,
            error: error
        }
        return (
            <ProfileContext.Provider value={value}>
                <div className='profile__container'>
                    <div className='profile__image' style={{ backgroundImage: `url` }} />
                    <div className='profile__personal'>
                        <h2>{profile.name}</h2>
                        <p>{profile.profile_tag}</p>
                        <p>Job Field: {profile.primary_industry}</p>
                    </div>
                    <ProfileEducation profile={profile} />
                    <ProfileEmpHistory profile={profile} />
                    <ProfileContact profile={profile} />
                </div>
            </ProfileContext.Provider>
        )
    }

    let content
    if (error) {
        content = (error.error === `Profile doesn't exist`)
            ? <p className='red'>Profile not found</p>
            : <p className='red'>There was an error</p>
    } else {
        if (profile.id > 0) {
            content = renderProfile()
        } else {
                content = <h3>Please Wait</h3>
            }
        }
    
    return content
}






