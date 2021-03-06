import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SEND_POSTS = 'SEND_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=KEYFORANAPP00';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function sendPosts(values, redirect) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                         .then(() => redirect());

    return {
        type: SEND_POSTS,
        payload: request
    }
}

export function fetchSinglePost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}

export function deleteSinglePost(id, redirect) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
                         .then(() => redirect());

    return {
        type: DELETE_POST,
        payload: id
    }
}