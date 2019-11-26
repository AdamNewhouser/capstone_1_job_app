import TokenService from '../services/token-service'
import config from '../config'

const ProfileApiService = {
    getProfile(profileId) {
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
}
    
    
export default ProfileApiService