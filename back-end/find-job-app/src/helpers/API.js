import axios from 'axios';
// import cookies from 'react-cookies';

export let endpoints = {
    'vieclams':         '/viec-lam/',
    'related-job':      '/viec-lam/:id/by-recruiter/',
    'phuclois':         '/phuc-loi/',
    'nhatuyendungs':    '/nha-tuyen-dung/',
    'ungtuyens':        '/ung-tuyens/',
    "nguoi-dung": "/nguoi-dung/",
    'login':            '/o/token/',
    'current-user':     '/nguoi-dung/current-user/',
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