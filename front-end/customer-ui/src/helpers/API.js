import axios from 'axios';

export let endpoints = {
    'nguoi-dung':                   '/nguoi-dung/',
    'nguoi-dung-hien-tai':          '/nguoi-dung/hien-tai/',
    'oauth2-info':                  '/oauth2-info/',
    'dang-nhap':                    '/o/token/',

    'ung-vien':                     '/ung-vien/',
    "ung-vien-cap-nhat":            "/ung-vien/",

    "nha-tuyen-dung":               "/nha-tuyen-dung/",

    "bang-cap": "/bang-cap/",
    "ky-nang": "/ky-nang/",
    "kinh-nghiem": "/kinh-nghiem/",
    "nganh-nghe": "/nganh-nghe/",
    "phuc-loi": "/phuc-loi/",
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})