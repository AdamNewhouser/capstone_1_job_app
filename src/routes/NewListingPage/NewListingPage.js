import React, { Component } from 'react'
import NewListingForm from '../../components/NewListingForm/NewListingForm'


export default class CreateListingPage extends Component {
    render() {
        return (
            <div className='CreateListingPage'>
                <h2>Create New Listing</h2>
                <NewListingForm props={this.props}/>
            </div>
        )
    }
}