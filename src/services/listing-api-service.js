import TokenService from '../services/token-service'
import config from '../config'

const ListingApiService = {
    getListings() {
        return fetch(`${config.API_ENDPOINT}/listings`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    getListing(listingId) {
        return fetch(`${config.API_ENDPOINT}/listings/${listingId}`, {
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

export default ListingApiService