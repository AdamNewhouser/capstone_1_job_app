import React, { useState, useEffect, useContext } from 'react'
import ListingApiService from '../../services/listing-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import Applicants from '../../components/Applicants/Applicants'
import LoginPage from '../LoginPage/LoginPage'
import ReactTimeAgo from 'react-time-ago'
import './ListingItem.css'


export default function ListingItem(props) {
    const context = useContext(ProfileContext)
    const [listing, setListing] = useState({ id: null })
    const [applicants, setApplicants] = useState([])
    const [listingId] = useState(props.match.params.listingId)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (context.userType === 'employer') {
            ListingApiService.getApplicants(listingId)
                .then(res => {
                    console.log(res)
                    setApplicants([res['0']])
                })
                .catch(setError)
        }
        ListingApiService.getListing(listingId)
            .then(setListing)
            .catch(setError)
        return () => {
            setListing({ id: null })
        }
    }, [listingId])

    const postApplication = () => {
        console.log('button test')
        ListingApiService.updateListingApplicants(listing, context.profile)
    }


    const renderCandidateView = () => {
        return (
            <div className='ListingItem'>
                <h2 className='list_company_name'>{listing.company_name}</h2>
                <h3 className='list_job_title'>{listing.job_title}</h3>
                <p className='p_location'>{listing.location}</p>
                <h4 className='h4 list_description'>Description</h4>
                <p className='p_description'>{listing.job_description}</p>
                <h4 className='h4 list_required'>Required Experience/Skills</h4>
                <p className='p_required'>{listing.required_skills}</p>
                <h4 className='h4 list_bonus'>Bonus Experience/Skills</h4>
                <p className='p_bonus'>{listing.additional_skills}</p>
                <h4 className='h4 list_salary'>Salary: {listing.pay}</h4>
                <h4 className='h4 list_listed'>Listed: <ReactTimeAgo date={listing.date_listed} locale='en' /></h4>
                <button className='apply_button' type='button' onClick={() => postApplication()}>Apply Now</button>
            </div>
        )
    }

    const renderEmployerView = () => {
        return (
            <div className='ListingItem-container'>
                <div className='ListingItem'>
                    <h2 className='list_company_name'>{listing.company_name}</h2>
                    <h3 className='list_job_title'>{listing.job_title}</h3>
                    <p className='p_location'>{listing.location}</p>
                    <h4 className='h4 list_description'>Description</h4>
                    <p className='p_description'>{listing.job_description}</p>
                    <h4 className='h4 list_required'>Required Experience/Skills</h4>
                    <p className='p_required'>{listing.required_skills}</p>
                    <h4 className='h4 list_bonus'>Bonus Experience/Skills</h4>
                    <p className='p_bonus'>{listing.additional_skills}</p>
                    <h4 className='h4 list_salary'>Salary: {listing.pay}</h4>
                    <h4 className='h4 list_listed'>Listed: <ReactTimeAgo date={listing.date_listed} locale='en' /></h4>
                </div>
                <div className='listing_applicants'>
                    <h3>Applicants</h3>
                    <ul>
                        <Applicants applicants={applicants} />
                    </ul>
                </div>
            </div >
        )
    }

    let content
    if (error) {
        content =
            error.error === `Listing doesn't exist` ? (
                <p>Listing not found</p>
            ) : (
                    <p>There was an error</p>
                )
    } else {
        if (listing.id > 0 && context.userType === 'employer') {
            content = renderEmployerView();
        } else {
            if (listing.id > 0 && context.userType === 'candidate') {
                content = renderCandidateView();
            } else {
                content = <LoginPage />
            }
        }
    }
    return content
}