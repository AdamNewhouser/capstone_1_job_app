import React, { Component } from 'react'

export const nullListing = {
    id: null,
    company_name: '',
    job_title: '',
    job_description: '',
    pay: '',
    required_skills: '',
    additional_skills: '',
    date_listed: ''
}

const ListingItemContext = React.createContext({
    listing: nullListing,
    error: null,
    setError: () => {},
    clearError: () => {},
    setListing: () => {},
    clearListing: () => {},
})

export default ListingItemContext

export class ListingItemProvider extends Component {
    state = {
        listing: nullListing,
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }
    setListing = listing => {
        this.setState({ listing })
    }
    clearListing = () => {
        this.setListing(null)
    }

    render() {
        const value = {
            listing: this.state.listing,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setListing: this.setListing,
            clearListing: this.clearListing,
        }
        return (
            <ListingItemContext.Provider value={value}>
                {this.props.children}
            </ListingItemContext.Provider>
        )
    }
}