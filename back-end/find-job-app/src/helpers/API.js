import axios from "axios";

export let endpoints = {
    'vieclams':         '/viec-lam/',
    'phuclois':         '/phuc-loi/',
    'nhatuyendungs':    '/nha-tuyen-dung/',
    'ungtuyens':        '/ung-tuyen/',
    'nguoidungs':       '/nguoi-dung/',
    'login': '/nguoi-dung/current-user/'
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})