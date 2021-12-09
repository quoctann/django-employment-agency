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
import Rating from '@material-ui/lab/Rating';
import DateFnsUtils from '@date-io/date-fns';
import API, { endpoints } from '../../helpers/API';
import { ACCOUNT, INFO, TAG } from './HomeRecruiter.const';
import { useStyles } from './HomeRecruiter.styles';
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

    const [userData, setUserData] = useState({
        ...cookies.load("user"),
    });

    const avatar = React.createRef();

    // Onchange thông tin thuộc bảng ứng viên
    const thongTinNhaTuyenDung = (event) => {
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
            else
                formData.append(u, userData[u]);
        }

        // if (avatar.current.files[0])
        //     formData.append("anh_dai_dien", avatar.current.files[0]);

        for (var key of formData.keys()) {
            console.log(key, formData.get(key));
        }

        const capNhat = await API.put(endpoints["nha-tuyen-dung"], formData, {
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
        // async function init() {

        // }
        // init()
        console.info('user', userData)
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
                    <Typography variant="h3" className={classes.titleInfo}>Thông tin nhà tuyển dụng</Typography>
                    <form className={classes.form}>
                        <Grid container spacing={4} xs={12}>
                            {/* thông tin người dùng */}
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    {/* Thông tin người dùng */}
                                    <Grid item xs={INFO.ten_cong_ty.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={INFO.ten_cong_ty.id}
                                            name={INFO.ten_cong_ty.id}
                                            label={INFO.ten_cong_ty.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.ten_cong_ty}
                                            onChange={thongTinNhaTuyenDung}
                                        // defaultValue={userData.nguoi_dung.last_name}
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
                                            onChange={thongTinNhaTuyenDung}
                                        // defaultValue={user.nguoi_dung.so_dien_thoai}
                                        />
                                    </Grid>
                                    <Grid item xs={INFO.quy_mo.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            // required
                                            fullWidth
                                            id={INFO.quy_mo.id}
                                            name={INFO.quy_mo.id}
                                            label={INFO.quy_mo.label}
                                            type={INFO.quy_mo.type}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.quy_mo}
                                            onChange={thongTinNhaTuyenDung}
                                        // defaultValue={user.nguoi_dung.so_dien_thoai}
                                        />
                                    </Grid>
                                    <Grid item xs={INFO.diem_danh_gia_tb.xs}>
                                        <Typography component="legend">{INFO.diem_danh_gia_tb.label}</Typography>
                                        <Rating value={4.5} precision={0.5} readOnly name={INFO.diem_danh_gia_tb.label} size="large" />
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
                                    <Grid item xs={INFO.gioi_thieu.xs}>
                                        <TextField
                                            autoComplete="off"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            multiline
                                            rows={INFO.gioi_thieu.rows}
                                            id={INFO.gioi_thieu.id}
                                            name={INFO.gioi_thieu.id}
                                            label={INFO.gioi_thieu.label}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={userData.gioi_thieu}
                                            onChange={thongTinNhaTuyenDung}
                                        // defaultValue={userData.nguoi_dung.gioi_thieu}
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