import React, { createRef, useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
    CircularProgress,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Container,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import API, { endpoints } from '../../helpers/API';
import { INFO_POST, TAG } from './NewPost.const';
import { useStyles } from './NewPost.styles';
import cookies from 'react-cookies';
import { useHistory, useLocation } from 'react-router';
import { PublicRoutes, RoutePaths } from '../../routes/public-route';
import AppSelect from '../../components/AppSelect';
import AppTextField from '../../components/AppTextField';
import AppDatePicker from '../../components/AppDatePicker';
import moment from "moment";

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { state } = useLocation();

    const [ngayHetHan, setNgayHetHan] = useState(new Date());
    const [tinTuyenDung, setTinTuyenDung] = useState({
        tieu_de: "",
        luong: "",
        noi_dung: "",
        ngay_het_han: moment(ngayHetHan).format("YYYY-MM-DD").toString(),
        nha_tuyen_dung_id: state.nguoidungId,
        bang_cap: [],
        ky_nang: [],
        kinh_nghiem: [],
        nganh_nghe: [],
        phuc_loi: [],
    })

    // Phương thức gửi dữ liệu lên server để tạo bản ghi
    const dangTinTuyenDung = async (event) => {
        console.log(tinTuyenDung)
        const res = await API.post(endpoints["viec-lam"], tinTuyenDung)
        // console.log(res.data)
        if (res.data === 201) {
            alert("Tạo việc làm thành công!")
            history.push(RoutePaths.HomeRecruiter);
        } else if (res.data === 400) {
            alert("Hệ thống đang lỗi vui lòng thử lại sau!")
        }
    }

    const onSubmit = async () => {
        setLoading(true);
        setTimeout(() => {
            dangTinTuyenDung();
            setLoading(false);
        }, 1000);
    }


    const [degrees, setDegrees] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [careers, setCareers] = useState([]);

    const getFilterCategory = async () => {
        const degreesRes = await API.get(endpoints["bang-cap"]);
        const skillsRes = await API.get(endpoints["ky-nang"]);
        const expRes = await API.get(endpoints["kinh-nghiem"]);
        const careersRes = await API.get(endpoints["nganh-nghe"]);
        setDegrees(careersRes.data.map(item => ({ value: item.id, label: item.ten })));
        setSkills(skillsRes.data.map(item => ({ value: item.id, label: item.ten })));
        setExperiences(expRes.data.map(item => ({ value: item.id, label: item.ten })));
        setCareers(degreesRes.data.map(item => ({ value: item.id, label: item.ten })));
    };

    useEffect(() => {
        async function init() {
            await getFilterCategory()

        }
        init()
    }, [])

    const back = () => {
        history.push(RoutePaths.HomeRecruiter);
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} xs={12}>
                <Grid item xs={10}>
                    <Typography variant="h3" className={classes.title}>Thông tin bài viết</Typography>
                    <form className={classes.form} >
                        <Grid container spacing={4} xs={12}>
                            <Grid item xs={5}>
                                <Grid container spacing={2}>
                                    <Grid item xs={INFO_POST.tieu_de.xs}>
                                        <AppTextField field={INFO_POST.tieu_de} value={tinTuyenDung.tieu_de}
                                            // onChange={(e) => setTinTuyenDung({
                                            //     ...tinTuyenDung,
                                            //     tieu_de: e.target.value,
                                            //     nha_tuyen_dung_id: state.nguoidungId,
                                            //     // nha_tuyen_dung_id: 'id = 10',
                                            // })} 
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, tieu_de: e.target.value })} />
                                        {/* /> */}
                                    </Grid>
                                    <Grid item xs={INFO_POST.ngay_het_han.xs}>
                                        <AppDatePicker field={INFO_POST.ngay_het_han} value={ngayHetHan}
                                            onChange={(date) => {
                                                setNgayHetHan(date)
                                                setTinTuyenDung({ ...tinTuyenDung, ngay_het_han: moment(date).format("YYYY-MM-DD").toString() })
                                            }} />
                                    </Grid>
                                    <Grid item xs={INFO_POST.luong.xs}>
                                        <AppTextField field={INFO_POST.luong} value={tinTuyenDung.luong}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, luong: e.target.value })} />
                                    </Grid>
                                    <Grid item xs={TAG.nganh_nghe.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.nganh_nghe.id} label={TAG.nganh_nghe.label}
                                            tags={degrees} userTag={tinTuyenDung.nganh_nghe}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, nganh_nghe: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.kinh_nghiem.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.kinh_nghiem.id} label={TAG.kinh_nghiem.label}
                                            tags={experiences} userTag={tinTuyenDung.kinh_nghiem}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, kinh_nghiem: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.ky_nang.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.ky_nang.id} label={TAG.ky_nang.label}
                                            tags={skills} userTag={tinTuyenDung.ky_nang}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, ky_nang: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.bang_cap.xs}>
                                        <AppSelect
                                            tag_type={TAG.bang_cap.id} label={TAG.bang_cap.label}
                                            tags={careers} userTag={tinTuyenDung.bang_cap}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, bang_cap: e })}
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={INFO_POST.noi_dung.xs}>
                                        <AppTextField field={INFO_POST.noi_dung} value={tinTuyenDung.noi_dung} multiline={true} rows={INFO_POST.noi_dung.rows}
                                            onChange={(e) => setTinTuyenDung({ ...tinTuyenDung, noi_dung: e.target.value })} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    onClick={back}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >Quay về</Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Button
                                    onClick={onSubmit}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >{loading ?
                                    <CircularProgress className={classes.loading} />
                                    : 'Cập nhập'
                                    }</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}