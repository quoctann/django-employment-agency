import axios from 'axios';

export let endpoints = {
    'nguoi-dung':                   '/nguoi-dung/',
    'nguoi-dung-hien-tai':          '/nguoi-dung/hien-tai/',
    'oauth2-info':                  '/oauth2-info/',
    'dang-nhap':                    '/o/token/',

    "ung-vien-cap-nhat":            "/ung-vien/",
    "ung-vien":  (nganhNghe, bangCap, kinhNghiem, kyNang) => {
        let url = "/ung-vien/?";
        if(nganhNghe)
            url += `nganh-nghe=${nganhNghe}&`;
        if(bangCap)
            url += `bang-cap=${bangCap}&`;
        if(kinhNghiem)
            url += `kinh-nghiem=${kinhNghiem}&`;
        if(kyNang)
            url += `ky-nang=${kyNang}&`;
        return url;
    },

    "nha-tuyen-dung":               "/nha-tuyen-dung/",
    "nha-tuyen-dung-viec-lam":      (nhatuyendungId) => `/nha-tuyen-dung/${nhatuyendungId}/viec-lam/`,

    "bang-cap": "/bang-cap/",
    "ky-nang": "/ky-nang/",
    "kinh-nghiem": "/kinh-nghiem/",
    "nganh-nghe": "/nganh-nghe/",
    "phuc-loi": "/phuc-loi/",

    "viec-lam":                     "/viec-lam/",
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})