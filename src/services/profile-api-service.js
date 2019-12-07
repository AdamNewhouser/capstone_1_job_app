import TokenService from '../services/token-service'
import config from '../config'


const ProfileApiService = {
    getProfile(profileId, userId, userType) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profileId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'userType': userType,
                'userId': userId,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getProfileAfterLogin(userId, userType) {
        console.log(userId, userType)
        return fetch(`${config.API_ENDPOINT}/profiles`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'userType': userType,
                'userId': userId,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getMicroProfile(profileId) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profileId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getApplicants(userId) {
        return fetch(`${config.API_ENDPOINT}/listings`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'userId': userId
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postProfile(profile) {
        return fetch(`${config.API_ENDPOINT}/profiles`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                profile,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postEducation(profileId, education) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profileId}/education`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                education,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postEmployment(profileId, employment) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profileId}/employment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                employment,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postImage(image_url, profile_id, user_id) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profile_id}/image`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                image_url,
                profile_id,
                user_id,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}


export default ProfileApiService