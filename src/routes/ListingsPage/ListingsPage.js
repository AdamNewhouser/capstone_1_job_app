import React, { Component } from 'react'
import Results from '../../components/Results/Results'

export default class ListingsPage extends Component {
    render() {
        return (
            <div className='ListingsPage'>
                <h2>Job Listings</h2>
                <label htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                <input name='search_jobs' type='text' id='ListingsPage__search_jobs' required></input>
                <ul className='ListingItemList'>
                    <Results />
                </ul>
            </div>
        )
    }
}