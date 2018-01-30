import axios from 'axios';

export const FETCH_URL = 'FETCH_URL';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api',
      API_KEY = '?key=KEYFORANAPP00';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_URL,
        payload: request
    }
}