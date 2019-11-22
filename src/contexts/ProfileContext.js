import React, { Component } from 'react'

export const nullProfile = {
    id: null,
    name: "",
    profile_tag: "",
    primary_industry: "",
    date_created: "",
    email: "",
    phone: "",
    company_name: "",
    job_title: "",
    job_description: "",
    length_of_duty: "",
    location: "",
    supervisor_name: "",
    supervisor_phone: "",
    school_name: "",
    degree: "",
    length_of_enrollment: "",
    ed_location: ""
}

const ProfileContext = React.createContext({
    profile: nullProfile,
    error: null,
    setError: () => {},
    clearError: () => {},
    setProfile: () => {},
    clearProfile: () => {},
})

export default ProfileContext

export class ProfileProvider extends Component {
    state = {
        profile: nullProfile,
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }
    setProfile = profile => {
        this.setState({ profile })
    }
    clearProfile = () => {
        this.setProfile(null)
    }

    render() {
        const value = {
            profile: this.state.profile,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setProfile: this.setProfile,
            clearProfile: this.clearProfile,
        }
        return (
            <ProfileContext.Provider value={value}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}