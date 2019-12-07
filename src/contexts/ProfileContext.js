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
    image: '',
    userId: null,
    userType: '',
    error: null,
    authToken: '',
    setError: () => {},
    clearError: () => {},
    setProfile: () => {},
    setUserId: () => {},
    setUserType: () => {},
    setImage: () => {},
    clearProfile: () => {},
    setEducation: () => {},
    setEmployment: () => {},
    setAuthToken: () => {},
    clearAuthToken: () => {},
})

export default ProfileContext

export class ProfileProvider extends Component {
    state = {
        profile: { id: 1},
        image: '',
        userId: null,
        userType: 'candidate',
        error: null,
        authToken: '',
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }
    setProfile = (profile) => {
        this.setState({ 
            profile
        })
    }
    setImage = image => {
        this.setState({
            image
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
    setAuthToken = token => {
        this.setState({
            authToken: token
        })
    }
    clearAuthToken = () => {
        this.setAuthToken('')
    }
    clearProfile = () => {
        this.setProfile(null)
    }
    setEducation = education => {
        this.setState({
            profile: { ...this.state.profile, education}
        })
    }
    setEmployment = employment => {
        this.setState({
            profile: { ...this.state.profile, employment}
        })
    }

    render() {
        const value = {
            profile: this.state.profile,
            image: this.state.image,
            userId: this.state.userId,
            userType: this.state.userType,
            error: this.state.error,
            authToken: this.state.authToken,
            setError: this.setError,
            clearError: this.clearError,
            setProfile: this.setProfile,
            setUserId: this.setUserId,
            setUserType: this.setUserType,
            clearProfile: this.clearProfile,
            setImage: this.setImage,
            setEducation: this.setEducation,
            setEmployment: this.setEmployment,
            setAuthToken: this.setAuthToken,
            clearAuthToken: this.clearAuthToken,
        }
        return (
            <ProfileContext.Provider value={value}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}