import React from 'react'
import Results from '../Results/Results'

export default function EmployerListings(props) {
    return (
        <div className='EmployerListings'>
            <ul>
                <Results listings={props.listings} />
            </ul>
        </div>
    )
}


