import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SEND_POSTS = 'SEND_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api',
      API_KEY = '?key=KEYFORANAPP00';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function sendPosts(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: SEND_POSTS,
        payload: request
    }
}