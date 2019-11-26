import React, { Component } from 'react'
import ProfileContext from '../../contexts/ProfileContext'
import ListingApiService from '../../services/listing-api-service'


export default class NewListingForm extends Component {
    static contextType = ProfileContext

    state = {
        company_name: '',
        location: '',
        job_title: '',
        job_description: '',
        pay: '',
        required_skills: '',
        additional_skills: '',
        user_id: null,
    }

    componentDidMount = () => {
        this.setState({
            user_id: this.context.userId
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newListing = this.state
        const userId = this.context.userId
        console.log(newListing)
        ListingApiService.postNewListing(newListing)
            .then(res => console.log(res))
            .then(res => this.props.history.push(`/listings/${res.id}`))
    }

    updateCompanyName = (company_name) => {
        this.setState({ company_name: company_name })
    }

    updateLocation = (location) => {
        this.setState({ location: location })
    }

    updateJobTitle = (job_title) => {
        this.setState({ job_title: job_title })
    }

    updateJobDescription = (job_description) => {
        this.setState({ job_description: job_description })
    }

    updatePay = (pay) => {
        this.setState({ pay: pay })
    }

    updateRequired = (required_skills) => {
        this.setState({ required_skills: required_skills })
    }

    updateAdditional = (additional_skills) => {
        this.setState({ additional_skills: additional_skills })
    }

    render() {
        return (
            <form className='NewListingForm' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='company_name'>
                    <label htmlFor='NewListingForm__company_name'>Company Name</label>
                    <input onChange={(e) => this.updateCompanyName(e.target.value)} required type='text' name='company_name' id="NewListingForm__company_name"></input>
                </div>
                <div className='location'>
                    <label htmlFor='NewListingForm__location'>Location</label>
                    <input onChange={(e) => this.updateLocation(e.target.value)} required type='text' name='location' id="NewListingForm__location"></input>
                </div>
                <div className='job_title'>
                    <label htmlFor='NewListingForm__job_title'>Job Title</label>
                    <input onChange={(e) => this.updateJobTitle(e.target.value)} required type='text' name='job_title' id="NewListingForm__job_title"></input>
                </div>
                <div className='job_description'>
                    <label htmlFor='NewListingForm__job_description'>Job Description</label>
                    <input onChange={(e) => this.updateJobDescription(e.target.value)} required type='text' name='job_description' id="NewListingForm__job_description"></input>
                </div>
                <div className='pay'>
                    <label htmlFor='NewListingForm__pay'>Pay</label>
                    <input onChange={(e) => this.updatePay(e.target.value)} required type='text' name='pay' id="NewListingForm__pay"></input>
                </div>
                <div className='required_skills'>
                    <label htmlFor='NewListingForm__required_skills'>Required Skills</label>
                    <input onChange={(e) => this.updateRequired(e.target.value)} required type='text' name='required_skills' id="NewListingForm__required_skills"></input>
                </div>
                <div className='additional_skills'>
                    <label htmlFor='NewListingForm__additional_skills'>Additional Skills</label>
                    <input onChange={(e) => this.updateAdditional(e.target.value)} required type='text' name='additional_skills' id="NewListingForm__additional_skills"></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}


