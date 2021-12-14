import React, { createRef, useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
    CircularProgress,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import API, { endpoints } from '../../helpers/API';
import { ACCOUNT, INFO, TAG } from './ProfileCandidate.const';
import { useStyles } from './ProfileCandidate.styles';
import cookies from 'react-cookies';
import { useHistory } from 'react-router';
import { PublicRoutes } from '../../routes/public-route';
import AppTable from '../../components/AppTable';
import { AlertSuccess, AlertWarning } from '../../components/AppAlert';
import AppSelect from '../../components/AppSelect';
import moment from "moment";

const columns = [
    { id: 'stt', label: 'STT', maxWidth: 20, align: 'center', },
    {
        id: 'static1',
        label: 'Trạng thái',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'people1',
        label: 'Người lớn',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'people2',
        label: 'Trẻ em',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'total',
        label: 'Tổng tiền',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(stt, static1, people1, people2, total, tourId, employeeId) {
    return { stt, static1, people1, people2, total, tourId, employeeId };
}

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [messSuc, setMessSuc] = useState('');
    const [messErr, setMessErr] = useState('');

    const [booking, setBooking] = useState([]);

    const userCookies = cookies.load("user");
    const [userData, setUserData] = useState({
        ...cookies.load("user"),
        nganh_nghe: userCookies.nganh_nghe.map(item => ({ value: item.id, label: item.ten })),
        bang_cap: userCookies.bang_cap.map(item => ({ value: item.id, label: item.ten })),
        ky_nang: userCookies.ky_nang.map(item => ({ value: item.id, label: item.ten })),
        kinh_nghiem: userCookies.kinh_nghiem.map(item => ({ value: item.id, label: item.ten })),
    });

    const [ngaySinh, setNgaySinh] = useState(new Date(userData.ngay_sinh));
    const avatar = React.createRef();
    const cv = React.createRef();

    // Onchange thông tin thuộc bảng ứng viên
    const thongTinUngVien = (event) => {
        event.persist();
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    // Onchange thông tin thuộc bảng người dùng
    const thongTinNguoiDung = (event) => {
        event.persist();
        setUserData({
            ...userData,
            nguoi_dung: {
                ...userData.nguoi_dung,
                [event.target.name]: event.target.value
            }
        })
    }

    // Get thông tin có sẵn trên server các danh mục để lọc
    const [degrees, setDegrees] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [careers, setCareers] = useState([]);

    // Gửi request để lấy dữ liệu
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

    const capNhatThongTin = async () => {
        // console.log(user)
        const formData = new FormData()
        // Duyệt qua người dùng lưu trong redux đã chỉnh sửa (nếu có) xong gán vào form data 
        for (let u in userData) {
            if (u === "nguoi_dung") {
                for (let i in userData.nguoi_dung) {
                    if (i !== "anh_dai_dien")
                        formData.append(i, userData.nguoi_dung[i]);
                }
            }
            else if (u === "nganh_nghe" || u === "bang_cap" || u === "ky_nang" || u === "kinh_nghiem") {
                formData.append(u, JSON.stringify(userData[u]));
                // formData.append(u, JSON.stringify(userData[u].map(item => ({ id: item.value, ten: item.label }))));
            }
            else if (u !== "cv")
                formData.append(u, userData[u]);
        }

        // if (avatar.current.files[0])
        //     formData.append("anh_dai_dien", avatar.current.files[0]);

        // if (cv.current.files[0])
        //     formData.append("cv", cv.current.files[0]);

        // for (var key of formData.keys()) {
        //     console.log(key, formData.get(key));
        // }

        const capNhat = await API.put(endpoints["ung-vien-cap-nhat"], formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        // console.info('capNhat', capNhat)

        if (capNhat.status === 200) {
            console.log(capNhat.status)
            cookies.save("user", capNhat.data)
            alert("Cập nhật thông tin thành công!")
            window.location.reload()
        } else if (capNhat.status === 400) {
            alert("Thông tin không hợp lệ!")
        }
    }

    const onSubmit = async () => {
        setLoading(true);
        setTimeout(() => {
            capNhatThongTin();
            setLoading(false);
        }, 1000);
    }

    //  hiểu đơn giản là load trang
    useEffect(() => {
        async function init() {
            await getFilterCategory()

        }
        init()
        // console.info('user', userData)
    }, [])


    // chuyển về trang đăng tin tức tour đã booking
    const handleChooseBooking = (tourId, employeeId) => {
        const _pathAPI = endpoints['news-tour'] + endpoints['have-tour'] + `?tour=${tourId}&employee=${employeeId}`;
        API.get(_pathAPI).then(res => {
            const _pathPage = PublicRoutes.NewsTourDetail.path.replace(":id", res.data[0].id)
            history.push(_pathPage, {
                newstour: res.data[0],
            })
            // console.info('res', res.data[0]);
        })
    }

    // tắt thông báo và cập nhập lại thông tin người dùng sau khi thay đổi
    const handleCloseSuc = (event, reason) => {
        if (reason === 'clickaway') {
            setMessSuc(false);
            const _path = PublicRoutes.Login.path;
            history.push(_path);
            window.location.reload();
        }

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    return (
        <>
            <Grid container spacing={5} xs={12}>
                <Grid item xs={8}>
                    <Typography variant="h3" className={classes.titleInfo}>Thông tin người dùng</Typography>
                    <form className={classes.form}>
                        <Grid container spacing={5} xs={12}>
                            {/* thông tin người dùng */}
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    {/* Thông tin người dùng */}
                                    <Grid item xs={ACCOUNT.last_name.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={ACCOUNT.last_name.id}
                                            name={ACCOUNT.last_name.id}
                                            label={ACCOUNT.last_name.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.nguoi_dung.last_name}
                                            onChange={thongTinNguoiDung}
                                        // defaultValue={userData.nguoi_dung.last_name}
                                        />
                                    </Grid>
                                    <Grid item xs={ACCOUNT.first_name.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={ACCOUNT.first_name.id}
                                            name={ACCOUNT.first_name.id}
                                            label={ACCOUNT.first_name.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.nguoi_dung.first_name}
                                            onChange={thongTinNguoiDung}
                                        // defaultValue={user.nguoi_dung.first_name}
                                        />
                                    </Grid>
                                    <Grid item xs={ACCOUNT.email.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={ACCOUNT.email.id}
                                            name={ACCOUNT.email.id}
                                            label={ACCOUNT.email.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.nguoi_dung.email}
                                            onChange={thongTinNguoiDung}
                                        // defaultValue={user.nguoi_dung.email}
                                        />
                                    </Grid>
                                    <Grid item xs={ACCOUNT.so_dien_thoai.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={ACCOUNT.so_dien_thoai.id}
                                            name={ACCOUNT.so_dien_thoai.id}
                                            label={ACCOUNT.so_dien_thoai.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.nguoi_dung.so_dien_thoai}
                                            onChange={thongTinNguoiDung}
                                        // defaultValue={user.nguoi_dung.so_dien_thoai}
                                        />
                                    </Grid>
                                    <Grid item xs={INFO.dia_chi.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={INFO.dia_chi.id}
                                            name={INFO.dia_chi.id}
                                            label={INFO.dia_chi.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.dia_chi}
                                            onChange={thongTinUngVien}
                                        // defaultValue={user.nguoi_dung.so_dien_thoai}
                                        />
                                    </Grid>
                                    <Grid item xs={INFO.gioi_thieu.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            multiline
                                            rows={15}
                                            id={INFO.gioi_thieu.id}
                                            name={INFO.gioi_thieu.id}
                                            label={INFO.gioi_thieu.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.gioi_thieu}
                                            onChange={thongTinUngVien}
                                        // defaultValue={userData.nguoi_dung.gioi_thieu}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                            </Grid>

                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={INFO.ngay_sinh.xs}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                format="dd/MM/yyyy"
                                                id="ngay_sinh"
                                                label="Ngày sinh"
                                                value={ngaySinh}
                                                onChange={(date) => {
                                                    setNgaySinh(date)
                                                    setUserData({ ...userData, ngay_sinh: moment(date).format("YYYY-MM-DD").toString() })
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            // defaultValue={user.nguoi_dung.so_dien_thoai}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item xs={TAG.nganh_nghe.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.nganh_nghe.id} label={TAG.nganh_nghe.label}
                                            tags={degrees} userTag={userData.nganh_nghe}
                                            onChange={(e) => setUserData({ ...userData, nganh_nghe: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.kinh_nghiem.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.kinh_nghiem.id} label={TAG.kinh_nghiem.label}
                                            tags={experiences} userTag={userData.kinh_nghiem}
                                            onChange={(e) => setUserData({ ...userData, kinh_nghiem: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.ky_nang.xs}>
                                        <AppSelect
                                            classes={classes}
                                            tag_type={TAG.ky_nang.id} label={TAG.ky_nang.label}
                                            tags={skills} userTag={userData.ky_nang}
                                            onChange={(e) => setUserData({ ...userData, ky_nang: e })}
                                        />
                                    </Grid>
                                    <Grid item xs={TAG.bang_cap.xs}>
                                        <AppSelect
                                            tag_type={TAG.bang_cap.id} label={TAG.bang_cap.label}
                                            tags={careers} userTag={userData.bang_cap}
                                            onChange={(e) => setUserData({ ...userData, bang_cap: e })}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={4}>
                    {/* lịch sử ứng tuyển */}
                    {/* <Grid item xs={7}>
                <Typography variant="h3">Lịch sử giao dịch</Typography>
                {loading ? <p>Loading ...</p> :
                    <AppTable columns={columns} data={booking} handleChooseBooking={handleChooseBooking} />
                }
            </Grid> */}
                </Grid>
            </Grid>

            {/* xử lý thông báo khi cập nhập thông tin người dùng */}
            <AlertSuccess content={messSuc} open={openSuccess} handleClose={handleCloseSuc} />
            <AlertWarning content={messErr} open={openError} handleClose={handleClose} />
        </>
    )
}