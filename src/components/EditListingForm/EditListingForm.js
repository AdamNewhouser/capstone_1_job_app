import React, { Component } from 'react'
import ProfileContext from '../../contexts/ProfileContext'
import ListingApiService from '../../services/listing-api-service'
import './EditListingForm.css'


export default class NewListingForm extends Component {
    static contextType = ProfileContext

    state = {
        company_name: `${this.props.listing.company_name}`,
        location: `${this.props.listing.location}`,
        job_title: `${this.props.listing.job_title}`,
        job_description: `${this.props.listing.job_description}`,
        pay: `${this.props.listing.pay}`,
        required_skills: `${this.props.listing.required_skills}`,
        additional_skills: `${this.props.listing.additional_skills}`,
        user_id: null,
        updated: false,
    }

    componentDidMount = () => {
        this.setState({
            user_id: this.context.userId
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const updatedListing = {
            company_name: this.state.company_name,
            location: this.state.location,
            job_title: this.state.job_title,
            job_description: this.state.job_description,
            pay: this.state.pay,
            required_skills: this.state.required_skills,
            additional_skills: this.state.additional_skills,
            user_id: this.state.user_id
        }
        ListingApiService.updateListing(updatedListing, this.props.listing.id)
            .then(res => {
                this.props.submitEditForm()
            })
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
                    <input onChange={(e) => this.updateCompanyName(e.target.value)} type='text' name='company_name' id="NewListingForm__company_name" placeholder={this.props.listing.company_name} className='newlist_input'></input>
                </div>
                <div className='location'>
                    <input onChange={(e) => this.updateLocation(e.target.value)} type='text' name='location' id="NewListingForm__location" placeholder={this.props.listing.location} className='newlist_input'></input>
                </div>
                <div className='job_title'>
                    <input onChange={(e) => this.updateJobTitle(e.target.value)} type='text' name='job_title' id="NewListingForm__job_title" placeholder={this.props.listing.job_title} className='newlist_input'></input>
                </div>
                <div className='job_description'>
                    <textarea onChange={(e) => this.updateJobDescription(e.target.value)} type='text' name='job_description' id="NewListingForm__job_description" placeholder={this.props.listing.job_description} className='newlist_input'></textarea>
                </div>
                <div className='pay'>
                    <input onChange={(e) => this.updatePay(e.target.value)} type='text' name='pay' id="NewListingForm__pay" placeholder={this.props.listing.pay} className='newlist_input'></input>
                </div>
                <div className='required_skills'>
                    <textarea onChange={(e) => this.updateRequired(e.target.value)} type='text' name='required_skills' id="NewListingForm__required_skills" placeholder={this.props.listing.required_skills} className='newlist_input'></textarea>
                </div>
                <div className='additional_skills'>
                    <textarea onChange={(e) => this.updateAdditional(e.target.value)} type='text' name='additional_skills' id="NewListingForm__additional_skills" placeholder={this.props.listing.additional_skills} className='newlist_input'></textarea>
                </div>
                <button type='submit' className='newlisting_submit'>Submit</button>
            </form>
        )
    }
}