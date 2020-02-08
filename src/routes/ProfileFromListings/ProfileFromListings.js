import React from "react";
import ProfileEducation from "../../components/ProfileEducation/ProfileEducation";
import ProfileEmpHistory from "../../components/ProfileEmpHistory/ProfileEmpHistory";
import ProfileContact from "../../components/ProfileContact/ProfileContact";
import "./ProfileFromListings.css";
import ProfileApiService from "../../services/profile-api-service";

export default class ProfileFromListings extends React.Component {
    state = {
        profile: {}
    }
    componentDidMount() {
        ProfileApiService.getProfileById(this.props.match.params.profileId)
                .then(res => {
                    this.setState({
                        image_url: res[0].image_url,
                        profile: res.profile.find(itm => itm.id == this.props.match.params.profileId)
                    })
                })
                .catch(error => console.error(error))
    }
  render() {
    return (
      <div className="background_container">
        <div className="profile__container">
          <div className="profile__personal">
            <div
              className="profile__image"
              style={{ backgroundImage: `url(${this.state.image_url})` }}
            />
            <h2 className="pro_name">{this.state.profile.name}</h2>
            <p className="pro pro_tag">{this.state.profile.profile_tag}</p>
            <p className="pro pro_industry">
              Job Field: {this.state.profile.primary_industry}
            </p>
          </div>
          <div className="profile_info_container">
            <ProfileEducation profile={this.state.profile} />
            <ProfileEmpHistory profile={this.state.profile} />
            <ProfileContact profile={this.state.profile} />
          </div>
        </div>
      </div>
    );
  }
}
