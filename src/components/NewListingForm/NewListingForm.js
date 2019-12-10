import React, { Component } from 'react'
import ProfileContext from '../../contexts/ProfileContext'
import ListingApiService from '../../services/listing-api-service'
import './NewListingForm.css'


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
        console.log(newListing)
        ListingApiService.postNewListing(newListing, this)
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
                    <input onChange={(e) => this.updateCompanyName(e.target.value)} type='text' name='company_name' id="NewListingForm__company_name" placeholder='Company Name' className='newlist_input' required></input>
                </div>
                <div className='location'>
                    <input onChange={(e) => this.updateLocation(e.target.value)} type='text' name='location' id="NewListingForm__location" placeholder='Location (City, State)' className='newlist_input' required></input>
                </div>
                <div className='job_title'>
                    <input onChange={(e) => this.updateJobTitle(e.target.value)} type='text' name='job_title' id="NewListingForm__job_title" placeholder='Job Title' className='newlist_input' required></input>
                </div>
                <div className='job_description'>
                    <textarea onChange={(e) => this.updateJobDescription(e.target.value)} type='text' name='job_description' id="NewListingForm__job_description" placeholder='Job Description' className='newlist_input' required></textarea>
                </div>
                <div className='pay'>
                    <input onChange={(e) => this.updatePay(e.target.value)} type='text' name='pay' id="NewListingForm__pay" placeholder='Pay (/hour or /year)' className='newlist_input' required></input>
                </div>
                <div className='required_skills'>
                    <textarea onChange={(e) => this.updateRequired(e.target.value)} type='text' name='required_skills' id="NewListingForm__required_skills" placeholder='Required Experience/Skills' className='newlist_input' required></textarea>
                </div>
                <div className='additional_skills'>
                    <textarea onChange={(e) => this.updateAdditional(e.target.value)} type='text' name='additional_skills' id="NewListingForm__additional_skills" placeholder='Bonus Experience/Skills' className='newlist_input' required></textarea>
                </div>
                <button type='submit' className='newlisting_submit'>Submit</button>
            </form>
        )
    }
}


