import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Results from '../../components/Results/Results'
import ListingApiService from '../../services/listing-api-service'

export default function ListingsPage(props) {
    const [listings, setListings] = useState([])
    const [listingsExist, setListingsExist] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        ListingApiService.getListings()
            .then(setListings)
            .then(setListingsExist(true))
            .catch(setError)
    }, [listingsExist === true])

    const renderCandidateListingsPage = () => {
        return (
            <div className='ListingsPage'>
                <h2>Job Listings</h2>
                <label htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                <input name='search_jobs' type='text' id='ListingsPage__search_jobs' required></input>
                <ul className='ListingItemList'>
                    <Results listings={listings} />
                </ul>
            </div>
        )
    }

    const renderEmployerListingsPage = () => {
        return (
            <div className='ListingsPage'>
                <h2>Job Listings</h2>
                <Link to={'/new_listing'}>Create a new listing</Link>
                <label htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                <input name='search_jobs' type='text' id='ListingsPage__search_jobs' required></input>
                <ul className='ListingItemList'>
                    <Results listings={listings} />
                </ul>
            </div>
        )
    }
    return renderEmployerListingsPage()
}
