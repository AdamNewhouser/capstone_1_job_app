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
    updateListingApplicants(listing, profile) {
        return fetch(`${config.API_ENDPOINT}/listings/${listing.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                id : listing.id,
                company_name: listing.company_name,
                location: listing.location,
                job_title: listing.job_title,
                job_description: listing.job_description,
                pay: listing.pay,
                required_skills: listing.required_skills,
                additional_skills: listing.additional_skills,
                date_listed: listing.date_listed,
                user_id: listing.user_id,
                applicants: [...listing.applicants, profile]
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    postNewListing(newListing, userId) {
        console.log(newListing, userId)
        return fetch(`${config.API_ENDPOINT}/listings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                newListing
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    }
}

export default ListingApiService