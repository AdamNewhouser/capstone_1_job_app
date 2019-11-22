import React, { Component } from 'react'
import Results from '../../components/Results/Results'
import ListingsContext from '../../contexts/ListingsContext'
import ListingApiService from '../../services/listing-api-service' 

export default class ListingsPage extends Component {
    static contextType = ListingsContext

    componentDidMount() {
        this.context.clearError()
        ListingApiService.getListings()
            .then(this.context.setListings)
            .catch(this.context.setError)
    }

    render() {
        const { listings } = this.context
        return (
            <div className='ListingsPage'>
                <h2>Job Listings</h2>
                <label htmlFor='ListingsPage__search_jobs'>Search jobs by keyword</label>
                <input name='search_jobs' type='text' id='ListingsPage__search_jobs' required></input>
                <ul className='ListingItemList'>
                    <Results  key={1} listings={listings} />
                </ul>
            </div>
        )
    }
}