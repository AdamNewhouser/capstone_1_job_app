import TokenService from '../services/token-service'
import config from '../config'


const ProfileApiService = {
    getProfile(profileId, userType) {
        return fetch(`${config.API_ENDPOINT}/profiles/${profileId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'userType': userType,
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
}


export default ProfileApiService