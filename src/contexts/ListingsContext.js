import React, { Component } from 'react'

const ListingsContext = React.createContext({
    listings: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setListings: () => {},
})
export default ListingsContext

export class ListingsProvider extends Component {
    state = {
        listings: [],
        error: null,
    }

    setListings = listings => {
        this.setState({ listings })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            listings: this.state.listings,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setListings: this.setListings
        }
        return (
            <ListingsContext.Provider value={value}>
                {this.props.children}
            </ListingsContext.Provider>
        )
    }
}