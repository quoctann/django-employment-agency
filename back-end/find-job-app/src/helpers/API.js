import axios from "axios";

export let endpoints = {
    'vieclams':         '/vieclams/',
    'phuclois':         '/phuclois/',
    'nhatuyendungs':    '/nhatuyendungs/',
    'ungtuyens':        '/ungtuyens/',
    'nguoidungs':       '/users/',
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})