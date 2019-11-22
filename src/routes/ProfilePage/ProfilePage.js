import React, { Component } from 'react'
import ProfileEducation from '../../components/ProfileEducation/ProfileEducation'
import ProfileEmpHistory from '../../components/ProfileEmpHistory/ProfileEmpHistory'
import ProfileContact from '../../components/ProfileContact/ProfileContact'
import ProfileContext from '../../contexts/ProfileContext'
import ProfileApiService from '../../services/profile-api-service'

export default class ProfilePage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = ProfileContext

    componentDidMount() {
        const { profileId } = this.props.match.params
        this.context.clearError()
        ProfileApiService.getProfile(profileId)
            .then(this.context.setProfile)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearProfile()
    }

    renderProfile() {
        const { profile } = this.context
        return (
            <div className='Profile__container'>
                <div className='Profile__image' style={{ backgroundImage: `url` }} />
                <div className='Profile__personal'>
                    <h2>{profile.name}</h2>
                    <p>{profile.profile_tag}</p>
                    <p>Job Field: {profile.primary_industry}</p>
                </div>
                <ProfileEducation profile={profile} />
                <ProfileEmpHistory profile={profile} />
                <ProfileContact profile={profile} />
            </div>
        )
    }

    render() {
        const { error, profile } = this.context
        let content
        if (error) {
            content = (error.error === `Profile doesn't exist`)
                ? <p className='red'>Profile not found</p>
                : <p className='red'>There was an error</p>
        } else if (!profile.id) {
            content = <div className='loading' />
        } else {
            content = this.renderProfile()
        }
        return content
    }
}





