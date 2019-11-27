import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Results.css'
import ProfileContext from '../../contexts/ProfileContext'

export default function Results(props) {
    const context = useContext(ProfileContext)

    const renderCandidateResults = () => {
        return (
            props.listings.map(listing => {
                return (
                    <li key={listing.id} className='results-item'>
                        <Link className='link-container' to={`/listings/${listing.id}`}>
                            <h3 className='list list_company'>{listing.company_name}</h3>
                            <p className='list list_job_title'>{listing.job_title}</p>
                            <p className='list list_salary'>Salary: {listing.pay}</p>
                        </Link>
                    </li>
                )
            })
        )
    }

    const renderEmployerResults = () => {
        return (
            props.listings.map(listing => {
                return (
                    <li key={listing.id} className='results-item'>
                        <Link className='link-container' to={`/listings/${listing.id}`}>
                            <h3 className='list list_company'>{listing.company_name}</h3>
                            <p className='list list_job_title'>{listing.job_title}</p>
                            <p className='list list_salary'>Salary: {listing.pay}</p>
                        </Link>
                    </li>
                )
            })
        )
    }

    let content 
    if (context.userType === 'employer') {
        content = renderEmployerResults()
    } else {
        content = renderCandidateResults()
    }
    return content
}


