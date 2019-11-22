import React from 'react'
import { Link } from 'react-router-dom'
import './Results.css'

export default function Results(props) {
    return (
        props.listings.map(listing => {
            return (
                <li key={listing.id} className='results-item'>
                    <Link className='link-container' to={`/listings/${listing.id}`}>
                        <h3>{listing.company_name}</h3>
                        <p>{listing.job_title}</p>
                        <p>Salary: {listing.pay}</p>
                    </Link>
                </li>
            )
        })
    )
}


