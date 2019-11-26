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
    userId: null,
    userType: '',
    error: null,
    setError: () => {},
    clearError: () => {},
    setProfile: () => {},
    setUserId: () => {},
    setUserType: () => {},
    clearProfile: () => {},
})

export default ProfileContext

export class ProfileProvider extends Component {
    state = {
        profile: nullProfile,
        userId: null,
        userType: '',
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
        this.setState({ 
            profile
        })
    }
    setUserId = userId => {
        this.setState({
            userId
        })
    }
    setUserType = userType => {
        this.setState({
            userType
        })
    }
    clearProfile = () => {
        this.setProfile(null)
    }

    render() {
        const value = {
            profile: this.state.profile,
            userId: this.state.userId,
            userType: this.state.userType,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setProfile: this.setProfile,
            setUserId: this.setUserId,
            setUserType: this.setUserType,
            clearProfile: this.clearProfile,
        }
        return (
            <ProfileContext.Provider value={value}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}