import React, { useState, useEffect, useContext } from 'react'
import ProfileEducation from '../../components/ProfileEducation/ProfileEducation'
import ProfileEmpHistory from '../../components/ProfileEmpHistory/ProfileEmpHistory'
import ProfileContact from '../../components/ProfileContact/ProfileContact'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import EmployerListings from '../../components/EmployerListings/EmployerListings'
import './ProfilePage.css'
import ListingApiService from '../../services/listing-api-service'



export default function ProfilePage(props) {
    const context = useContext(ProfileContext)
    const [profile, setProfile] = useState({ id: null })
    const [profileId] = useState(props.match.params.profileId)
    const [listings, setListings] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        if (context.userType === 'employer') {
            ListingApiService.getListingsByEmployerId(context.userId)
                .then(setListings)
                .catch(setError)
        }
        ProfileApiService.getProfile(context.userId, context.userType)
            .then(setProfile)
            .catch(setError)
        return () => {
            setProfile({ id: null })
        }
    }, [profileId])


const renderCandidateProfile = () => {
    const value = {
        profile: profile,
        error: error
    }
    const viewPoint = context.userType
    if (viewPoint === 'candidate') {
        return (
            <ProfileContext.Provider value={value}>
                <div className='profile__container'>
                <div className='profile__image' style={{ backgroundImage: `url(${profile.image_url})` }} />
                    <div className='profile__personal'>
                        <h2>{profile.name}</h2>
                        <p className='pro pro_tag'>{profile.profile_tag}</p>
                        <p className='pro pro_industry'>Job Field: {profile.primary_industry}</p>
                    </div>
                    <ProfileEducation profile={profile} />
                    <ProfileEmpHistory profile={profile} />
                    <ProfileContact profile={profile} />
                </div>
            </ProfileContext.Provider>
        )
    } else {
        return <div>You do not have permission to view this page</div>
    }
}

const renderEmployerProfile = () => {
    const value = {
        profile: profile,
        error: error
    }
    const viewPoint = context.userType
    if (viewPoint === 'employer') {
        return (
            <ProfileContext.Provider value={value}>
                <div className='profile__container'>
                    <div className='profile__image' style={{backgroundImage: `url(${profile.image_url})`}} />
                    <div className='profile__personal'>
                        <h2>{profile.name}</h2>
                        <p className='pro pro_tag'>{profile.profile_tag}</p>
                        <p className='pro pro_industry'>Industry: {profile.primary_industry}</p>
                    </div>
                    <h3>My Listings</h3>
                    <EmployerListings listings={listings}/>
                </div>
            </ProfileContext.Provider>
        )
    } else {
        return (
            <ProfileContext.Provider value={value}>
                <div className='profile__container'>
                    <div className='profile__image' style={{ backgroundImage: `url` }} />
                    <div className='profile__personal'>
                        <h2>{profile.name}</h2>
                        <p>{profile.profile_tag}</p>
                        <p>Industry: {profile.primary_industry}</p>
                    </div>
                </div>
            </ProfileContext.Provider>
        )
    }
}

let content
if (error) {
    content = (error.error === `Profile doesn't exist`)
        ? <p className='red'>Profile not found</p>
        : <p className='red'>There was an error</p>
} else {
    if (profile.id > 0 && context.userType === 'employer') {
        content = renderEmployerProfile()
    } else {
        if (profile.id > 0 && context.userType === 'candidate') {
            content = renderCandidateProfile()
        } else {
            content = <h3>Please Wait</h3>
        }
    }
}
return content
}






