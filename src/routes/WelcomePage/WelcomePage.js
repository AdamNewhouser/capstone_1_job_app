import React, { Component } from 'react'
import ProfileApiService from '../../services/profile-api-service'
import ProfileContext from '../../contexts/ProfileContext'
import './WelcomePage.css'

export default class WelcomePage extends Component {
    state = {
        profile: {
            profile: {},
            education: {},
            employment: {},
            error: null
        }
    }

    static contextType = ProfileContext

    componentDidMount = () => {
        this.setState({
            profile: { user_id: this.context.userId },
        })
    }

    handleSubmitCandidateSubmit = (e) => {
        e.preventDefault()
        ProfileApiService.postProfile(this.state.profile)
            .then(profile => {
                this.setState({
                    profile: { ...this.state.profile, id: profile.id },
                    education: { ...this.state.education, profile_id: profile.id },
                    employment: { ...this.state.employment, profile_id: profile.id }
                })
                this.context.setProfile(profile)
                ProfileApiService.postEducation(this.state.profile.id, this.state.education)
                    .then(education => {
                        this.context.setEducation(education)
                        ProfileApiService.postEmployment(this.state.profile.id, this.state.employment)
                            .then(employment => {
                                this.context.setEmployment(employment)
                                ProfileApiService.postImage({
                                    image_url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                                    profile_id: this.state.profile.id,
                                    user_id: this.context.userId
                                })
                                    .then(res => {
                                        this.context.setImage(res.image_url)
                                        ProfileApiService.getProfile(res.user_id, this.context.userId, this.context.userType)
                                            .then(res => {
                                                this.context.setProfile(res.profile)
                                                this.props.history.push(`/profiles/${res.profile.id}`)
                                            })
                                    })
                            })
                    })
            })
    }

    render() {
        return (
            <div className='WelcomePage'>
                <form className='CreateProfileForm' onSubmit={(e) => this.handleSubmitCandidateSubmit(e)}>
                    <div className='welcome_header'>
                        <h2>Welcome to the Job App!</h2>
                        <p className='welcome_explain'>Before you can get started searching for your new career, a detailed profile is a must!</p>
                        <p className='welcome_explain'>Your profile is essentially your resume. Let's build your profile!</p>
                    </div>
                    <h3>1: Basics</h3>
                    <div>
                        <input onChange={(e) => this.setState({ profile: { ...this.state.profile, name: e.target.value } })} name='name' type='text' id='CreateProfileForm__name' placeholder='Full Name' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ profile: { ...this.state.profile, profile_tag: e.target.value } })} name='profile_tag' type='text' id='CreateProfileForm__profile_tag' placeholder='Tag (1-2 sentences describing yourself)' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ profile: { ...this.state.profile, primary_industry: e.target.value } })} name='primary_industry' type='text' id='CreateProfileForm__primary_industry' placeholder='Primary Industry or Job Field' className='wel_input' required></input>
                    </div>
                    <h3>2: Education (primary)</h3>
                    <div>
                        <input onChange={(e) => this.setState({ education: { ...this.state.education, school_name: e.target.value } })} name='school_name' type='text' id='CreateProfileForm__school_name' placeholder='School Name' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ education: { ...this.state.education, degree: e.target.value } })} name='degree' type='text' id='CreateProfileForm__degree' placeholder='Degree' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ education: { ...this.state.education, length_of_enrollment: e.target.value } })} name='length_of_enrollment' type='text' id='CreateProfileForm__length_of_enrollment' placeholder='Length of Study (eg. Fall 2015 - Spring 2019)' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ education: { ...this.state.education, location: e.target.value } })} name='ed_location' type='text' id='CreateProfileForm__ed_location' placeholder='Location' className='wel_input' required></input>
                    </div>
                    <h3>3: Employment (most recent)</h3>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, company_name: e.target.value } })} name='company_name' type='text' id='CreateProfileForm__company_name' placeholder='Company Name' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, job_title: e.target.value } })} name='job_title' type='text' id='CreateProfileForm__job_title' placeholder='Job Title' className='wel_input' required></input>
                    </div>
                    <div>
                        <textarea onChange={(e) => this.setState({ employment: { ...this.state.employment, job_description: e.target.value } })} name='job_description' type='text' id='CreateProfileForm__job_description' placeholder='Job Description (what were your responsibilities/duties on the job)' className='wel_input' required></textarea>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, length_of_duty: e.target.value } })} name='length_of_duty' type='text' id='CreateProfileForm__length_of_duty' placeholder='Length of Duty (eg. March 2017 - May 2019)' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, location: e.target.value } })} name='emp_location' type='text' id='CreateProfileForm__emp_location' placeholder='Location' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, supervisor_name: e.target.value } })} name='super_name' type='text' id='CreateProfileForm__super_name' placeholder='Supervisor Name' className='wel_input' required></input>
                    </div>
                    <div>
                        <input onChange={(e) => this.setState({ employment: { ...this.state.employment, supervisor_phone: e.target.value } })} name='super_phone' type='text' id='CreateProfileForm__super_phone' placeholder='Supervisor Phone' className='wel_input' required></input>
                    </div>
                    <button type='submit' className='wel_button'>Submit</button>
                </form>
            </div>
        )
    }
}