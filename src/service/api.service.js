import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_PUBLIC_KEY_FIVE,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);

        return response.data;
    }
}