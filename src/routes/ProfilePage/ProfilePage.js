import React, { useState, useEffect, useContext } from 'react'
import ProfileEducation from '../../components/ProfileEducation/ProfileEducation'
import ProfileEmpHistory from '../../components/ProfileEmpHistory/ProfileEmpHistory'
import ProfileContact from '../../components/ProfileContact/ProfileContact'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import EmployerListings from '../../components/EmployerListings/EmployerListings'
import './ProfilePage.css'
import ListingApiService from '../../services/listing-api-service'
import LoginPage from '../LoginPage/LoginPage'


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
        // ProfileApiService.getProfile(context.profile.id, context.userId, context.userType)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(setError)
        // return () => {
        //     setProfile({ id: null })
        // }
    }, [profileId])


    const renderCandidateProfile = () => {
        const value = {
            profile: profile,
            error: error
        }
        const viewPoint = context.userType
        console.log(context.authToken)
        if (viewPoint === 'candidate') {
            return (
                <ProfileContext.Provider value={value}>
                    <div className='background_container'>
                        <div className='profile__container'>
                            <div className='profile__personal'>
                                <div className='profile__image' style={{ backgroundImage: `url(${context.image})` }} />
                                <h2 className='pro_name'>{context.profile.name}</h2>
                                <p className='pro pro_tag'>{context.profile.profile_tag}</p>
                                <p className='pro pro_industry'>Job Field: {context.profile.primary_industry}</p>
                            </div>
                            <ProfileEducation profile={context.profile} />
                            <ProfileEmpHistory profile={context.profile} />
                            <ProfileContact profile={context.profile} />
                        </div>
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
                        <div className='profile__personal'>
                            <div className='profile__image' style={{ backgroundImage: `url(${context.image})` }} />
                            <h2 className='pro_name'>{context.profile.name}</h2>
                            <p className='pro pro_tag'>{context.profile.profile_tag}</p>
                            <p className='pro pro_industry'>Industry: {context.profile.primary_industry}</p>
                        </div>
                        <h3 className='pro_my_listings'>My Listings</h3>
                        <EmployerListings listings={listings} />
                    </div>
                </ProfileContext.Provider>
            )
        } else {
            return (
                <ProfileContext.Provider value={value}>
                    <div className='profile__container'>
                        <div className='profile__personal'>
                            <div className='profile__image' style={{ backgroundImage: `url(${context.image})` }} />
                            <h2 className='pro_name'>{context.profile.name}</h2>
                            <p>{context.profile.profile_tag}</p>
                            <p>Industry: {context.profile.primary_industry}</p>
                        </div>
                    </div>
                </ProfileContext.Provider>
            )
        }
    }

    let content
    if (!profile) {
        content = (error.error === `Profile doesn't exist`)
            ? <p className='red'>Profile not found</p>
            : <p className='red'>There was an error</p>
    } else {

        if (context.profile.id > 0 && context.userType === 'employer') {
            content = renderEmployerProfile()
        } else {
            if (context.profile.id > 0 && context.userType === 'candidate') {
                content = renderCandidateProfile()
            } else {
                content = <LoginPage />
            }
        }
    }
    return content
}






