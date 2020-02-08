import TokenService from "../services/token-service";
import config from "../config";

const ListingApiService = {
  getListings() {
    return fetch(`${config.API_ENDPOINT}/listings`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getListing(listingId) {
    return fetch(`${config.API_ENDPOINT}/listings/${listingId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getListingsByEmployerId(userId) {
    return fetch(`${config.API_ENDPOINT}/listings`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        userId: userId
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getApplicants(listingId) {
    return fetch(`${config.API_ENDPOINT}/applicants`, {
      headers: {
        listingId: listingId
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updateListingApplicants(listing, profile) {
    return fetch(`${config.API_ENDPOINT}/listings/${listing.id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        profile_id: profile.id,
        listing_id: listing.id
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewListing(newListing) {
    return fetch(`${config.API_ENDPOINT}/listings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        newListing
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updateListing(updatedListing, listing_id) {
    return fetch(`${config.API_ENDPOINT}/listings/${listing_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        listing_id,
        updatedListing
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ListingApiService;
