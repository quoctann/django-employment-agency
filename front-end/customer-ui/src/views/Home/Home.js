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
import { PublicRoutes } from '../../routes/public-route'
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Home.styles';
import AppSelect from '../../components/AppSelect';
import _ from "lodash";

export default function HomePage() {
    const classes = useStyles();

    useEffect(() => {
        console.info('tags',  _.filter(tags, { ten: 'A2'}).length !== 0 ? true : false)
        // console.info('tags', tags)
        searchTag();
    }, [])

    const searchTag = (ten) => {
        if (_.filter(tags, { ten: 'A5' }).length > 0) {
            console.info('true', _.filter(tags, { ten: 'A3' }))
        } else {
            console.info('false', _.filter(tags, { ten: 'A5' }))
        }
    }

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
