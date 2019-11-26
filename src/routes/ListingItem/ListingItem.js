import React, { useState, useEffect, useContext } from 'react'
import ListingApiService from '../../services/listing-api-service'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'


export default function ListingItem(props) {
    const context = useContext(ProfileContext)
    const [listing, setListing] = useState({ id: null })
    const [listingId] = useState(props.match.params.listingId)
    const [error, setError] = useState(null)

    useEffect(() => {
        ListingApiService.getListing(listingId)
            .then(setListing)
            .catch(setError)
        return () => {
            setListing({ id: null })
        }
    }, [listingId])

    const postApplication = () => {
        ListingApiService.updateListingApplicants(listing, context.profile)
    }
    
    const renderListing = () => {
        return (
            <div className='ListingItem'>
                <h2>{listing.company_name}</h2>
                <h3>{listing.job_title}</h3>
                <h4>Location</h4>
                <p>{listing.location}</p>
                <h4>Description</h4>
                <p>{listing.job_description}</p>
                <h4>Required Skills</h4>
                <p>{listing.required_skills}</p>
                <h4>Additional Skills</h4>
                <p>{listing.additional_skills}</p>
                <h4>Salary</h4>
                <p>{listing.pay}</p>
                <h4>Listing created on: {listing.date_listed}</h4>
                <button type='submit' onSubmit={() => postApplication()}>Apply</button>
            </div>
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
        if(listing.id > 0) {
            content = renderListing();
        } else {
            content = <h3>Please Wait</h3>
        }
    }
    return content
}