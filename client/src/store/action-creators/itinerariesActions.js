import { FETCH_ITINERARIES_FOR_A_CITY } from '../constants'
import Axios from 'axios';

const fetchItinerariesForACity = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_FOR_A_CITY,
        itineraries: itineraries
    }
};


export const getItinerariesForACity = (city_name) => dispatch => {
    return fetch(`/api/itineraries/${city_name}`, { method: 'GET' })
    .then(response => response.json())
    .then(response => {
        return dispatch(fetchItinerariesForACity(response));
    })
    .catch(err => console.log(err));
}

// export const getFavs = (userID) => dispatch => {
//     return fetch(`/api/itineraries/${userID}`, {method: 'GET'})
//     .then(response => {
//         console.log("response:", response)
//         return response
//     })
//     .then(data => {
//         console.log("data:", data)
//         return data
//     })
//     .catch(err => console.log(err));
// }

// export const setFav = (itin) => dispatch => {
//     return Axios.post(`/api/favourites/${itin.userID}`, itin)
//     .then(res => res)
//     .then(data => data)
//     .catch(err => console.log(err))
// }

// export const deleteFav = (itin) => dispatch => {
//     return Axios.delete(`/api/favourites/`, itin)
//     .then(res => res)
//     .then(res => res)
//     .catch(err => console.log(err))
// }