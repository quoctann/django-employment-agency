import React, { useEffect, useState } from 'react';
import {
    TextField,
    Typography,
    Grid,
    Container,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import API, { endpoints } from '../../helpers/API';
import { PublicRoutes, PublicRouteNames } from '../../routes/public-route'
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Home.styles';
import AppSelect from '../../components/AppSelect';
import { getAuthLS, clearAuthLS, LS_KEY } from "../../helpers/localStorage";
import cookies from 'react-cookies';
import _ from "lodash";

export default function HomePage() {
    const classes = useStyles();

    const check = getAuthLS(LS_KEY.AUTH_TOKEN);

    const checkDataCookies = () => {
        if ((check !== '' && !cookies.load("user")) || (!check && cookies.load("user"))) {
            clearAuthLS();
            cookies.remove('user');
            cookies.remove('access_token');
        }
    }

    useEffect(() => {
        checkDataCookies()
        // console.info('tags',  _.filter(tags, { ten: 'A2'}).length !== 0 ? true : false)
        // console.info('ca 2', ![PublicRouteNames.ProfileCan, PublicRouteNames.HomeRecruiter].includes('HomeRecruiter'))
        // console.info('RecruiterLayout', ![PublicRouteNames.ProfileCan].includes('ProfileCan'))
        // console.info('CandidateLayout', ![PublicRouteNames.HomeRecruiter].includes('HomeRecruiter'))
        console.info('cookies', !cookies.load("user"))
        console.info('check', !check)


    // searchTag();
}, [])

// const searchTag = (ten) => {
//     if (_.filter(tags, { ten: 'A5' }).length > 0) {
//         console.info('true', _.filter(tags, { ten: 'A3' }))
//     } else {
//         console.info('false', _.filter(tags, { ten: 'A5' }))
//     }
// }

const arr = [
    {
        id: 5,
        ten: 'A5',
    },
    {
        id: 6,
        ten: 'A6',
    },
]

const tags = [
    {
        id: 1,
        ten: 'A',
    },
    {
        id: 2,
        ten: 'A1',
    },
    {
        id: 3,
        ten: 'A2',
    },
    {
        id: 4,
        ten: 'A3',
    },
];

const datas = [
    {
        id: 5,
        ten: 'A5',
    },
    {
        id: 6,
        ten: 'A6',
    },
];

// let arr = []
// degrees.map(item => arr.push({value: item.id, label: item.ten}))
// options['degrees'] = arr;

const handleInputChange = () => {
    console.info('pass')
}

return (

    <Container maxWidth='lg' >
        <form>
            <AppSelect tags={tags} inputs={datas} handleChange={handleInputChange} />
        </form>
    </Container>


);
}
