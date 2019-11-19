import React, { Component } from 'react'

export default class ListingItem extends Component {
    render() {
        return (
            <div className='ListingItem'>
                <h2>Listing Title</h2>
                <h3>Company Name</h3>
                <h4>Description</h4>
                <p>This is a description of the job</p>
                <h4>Requirements</h4>
                <p>Experience: exp needed</p>
                <p>Skills: skills needed</p>
                <h4>Salary</h4>
                <p>$$$/hour</p>
            </div>
        )
    }
}