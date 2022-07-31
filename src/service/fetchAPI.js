import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'fb3b1d607bdb2048b1877f4514177cf6';
axios.defaults.params = { api_key: API_KEY };

export const fetchMovies = async fetchParameter => {
    try {
        const response = await axios.get( fetchParameter );
        return response.data;
    } catch ( error ) {
        console.log( error.message );
    }
};
