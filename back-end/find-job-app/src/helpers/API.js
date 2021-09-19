import axios from 'axios';

export let endpoints = {
    'vieclams':         '/vieclams/',
    'related-job':      '/vieclams/:id/by-recruiter/',
    'phuclois':         '/phuclois/',
    'nhatuyendungs':    '/nhatuyendungs/',
    'ungtuyens':        '/ungtuyens/',
    'nguoidungs':       '/users/',
    'login':            '/o/token/',
    'current-user':     '/users/current-user/',
    "oauth2-info":      '/oauth2-info/',
}

// export let AuthAPI = axios.create({
//     baseURL: 'http://127.0.0.1:8000/',
//     headers: {
//         Authorization: `Bearer ${cookies.load("access_token")}`
//     }
// })

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})