import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Results from '../../components/Results/Results'
import ListingApiService from '../../services/listing-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import './ListingsPage.css'
import ValidationError from '../../components/ValidationError/ValidationError'

export default function ListingsPage(props) {
    const context = useContext(ProfileContext)
    const [listings, setListings] = useState([])
    const [listingsExist, setListingsExist] = useState(false)
    const [currentKeyword, setCurrentKeyword] = useState('')
    const [touched, setTouched] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {        
        ListingApiService.getListings()
            .then(setListings)
            .then(setListingsExist(true))
            .catch(setError)
    }, [listingsExist === true])

    const updateCurrentKeyword = (keyword) => {
        setCurrentKeyword(keyword.toLowerCase())
        setTouched(true)
        console.log(listings)
    }

    const validateKeyword = () => {
        const keyword = currentKeyword.trim()
        if (keyword.length === 0) {
            return 'This is a required field'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const filteredListings = []
        listings.map(listing => {
            const filtered = Object.values(listing).filter(value => value.toString().toLowerCase().includes(currentKeyword) === true)
            if (filtered.length !== 0) {
                filteredListings.push(listing)
            }
        })
        setListings(filteredListings)
    }

    const renderCandidateListingsPage = () => {
        return (
            <div className='ListingsPage'>
                <h2>Job Listings</h2>
                <form className='search_form' onSubmit={(e) => handleSubmit(e)}>
                    <label className='search_label' htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                    <input onChange={(e) => updateCurrentKeyword(e.target.value)} name='search_jobs' type='text' id='ListingsPage__search_jobs' value={currentKeyword} required></input>
                    {touched && <ValidationError message={validateKeyword()} />}
                    <button type='submit' className='search_button' disabled={validateKeyword()}>Search</button>
                </form>
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
                <form className='search_form'>
                    <label className='search_label' htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                    <input onChange={(e) => updateCurrentKeyword(e.target.value)} name='search_jobs' type='text' id='ListingsPage__search_jobs' value={currentKeyword} required></input>
                    {touched && <ValidationError message={validateKeyword()} />}
                    <button type='submit' className='search_button' disabled={validateKeyword()}>Search</button>
                </form>
                <ul className='ListingItemList'>
                    <Results listings={listings} />
                </ul>
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
        if (context.userType === 'employer') {
            content = renderEmployerListingsPage()
        } else {
            content = renderCandidateListingsPage()
        }
    }
    return content
}
