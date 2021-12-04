import axios from 'axios';

export let endpoints = {
    'nguoi-dung':                   '/nguoi-dung/',
    'nguoi-dung-hien-tai':          '/nguoi-dung/hien-tai/',
    'oauth2-info':                  '/oauth2-info/',
    'dang-nhap':                    '/o/token/',

    'ung-vien':             '/ung-vien/',
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})