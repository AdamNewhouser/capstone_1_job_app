import React from 'react'
import Results from '../Results/Results'
import './EmployerListings.css'

export default function EmployerListings(props) {
    return (
        <div className='EmployerListings'>
            <ul className='EmployerListings__list'>
                <Results listings={props.listings} />
            </ul>
        </div>
    )
}


