import React, { Component } from 'react'
import ListingApiService from '../../services/listing-api-service'
import ListingItemContext from '../../contexts/ListingItemContext'

export default class ListingItem extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = ListingItemContext

    componentDidMount() {
        const { listingId } = this.props.match.params
        console.log(listingId)
        this.context.clearError()
        ListingApiService.getListing(listingId)
            .then(this.context.setListing)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearListing()
    }

    renderListing() {
        const { listing } = this.context
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
                <button type='submit'>Apply</button>
            </div>
        )
    }

    render() {
        const { error, listing } = this.context
        let content 
        if (error) {
            content = (error.error === `Listing doesn't exist`)
                ? <p>Listing not found</p>
                : <p>There was an error</p>
        
        } else {
            content = this.renderListing()
        }
        return content
    }
}