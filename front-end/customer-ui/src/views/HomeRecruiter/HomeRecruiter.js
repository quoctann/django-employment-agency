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
import { ACCOUNT, INFO, JOB_TABLE, TAG } from './HomeRecruiter.const';
import { useStyles } from './HomeRecruiter.styles';
import cookies from 'react-cookies';
import { useHistory } from 'react-router';
import { PublicRoutes, RoutePaths } from '../../routes/public-route';
import AppTable from '../../components/AppTable';
import AppSelectSingle from '../../components/AppSelectSingle';
import moment from "moment";

function createData(stt, tieu_de, noi_dung, luong, ngay_tao, ngay_het_han, trang_thai_viec_lam) {
    return { stt, tieu_de, noi_dung, luong, ngay_tao, ngay_het_han, trang_thai_viec_lam };
}

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const [danhSachViecLam, setDanhSachViecLam] = useState([]);
    const [ketQua, setKetQua] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
    })

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
        async function init() {
            await fetchViecLam()
            await getFilterCategory()
        }
        init()
    }, [])

    const fetchViecLam = async () => {
        const res = await API.get(endpoints["nha-tuyen-dung-viec-lam"](userData.nguoi_dung.id))
        setDanhSachViecLam(res.data.map((b, idx) =>
            createData(idx + 1, b.tieu_de, b.noi_dung, b.luong !== 0 ? b.luong : 'thỏa thuận', moment(b.ngay_tao).format("DD-MM-YYYY").toString(), moment(b.ngay_het_han).format("DD-MM-YYYY").toString(), b.trang_thai_viec_lam),
        ))
    }

    // chuyển về trang đăng tin tức tour đã booking
    const handleChoose = (tourId, employeeId) => {
        const _pathAPI = endpoints['news-tour'] + endpoints['have-tour'] + `?tour=${tourId}&employee=${employeeId}`;
        API.get(_pathAPI).then(res => {
            const _pathPage = PublicRoutes.NewsTourDetail.path.replace(":id", res.data[0].id)
            history.push(_pathPage, {
                newstour: res.data[0],
            })
            // console.info('res', res.data[0]);
        })
    }


    // Get thông tin có sẵn trên server các danh mục để lọc (nên gom lại 1 object cho gọn)
    const [degrees, setDegrees] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [careers, setCareers] = useState([]);
    const [benefits, setBenefits] = useState([])

    // Gửi request để lấy dữ liệu danh mục
    const getFilterCategory = async () => {
        const degreesRes = await API.get(endpoints["bang-cap"]);
        const skillsRes = await API.get(endpoints["ky-nang"]);
        const expRes = await API.get(endpoints["kinh-nghiem"]);
        const careersRes = await API.get(endpoints["nganh-nghe"]);
        const benefitsRes = await API.get(endpoints["phuc-loi"])
        setDegrees(degreesRes.data);
        setSkills(skillsRes.data);
        setExperiences(expRes.data);
        setCareers(careersRes.data);
        setBenefits(benefitsRes.data);
    };

    const [filterData, setFilterData] = useState({
        "career": "1",
        "degree": "1",
        "experience": "1",
        "skill": "1",
    })

    const locUngVien = async (page = 1) => {
        const res = await API.get(endpoints["ung-vien"](filterData.career, filterData.degree, filterData.experience, filterData.skill))
        setKetQua(res.data)
        console.log('res.data', ketQua)
    }

    const handleSelectChange = (event) => {
        setFilterData({
            ...filterData,
            [event.target.name]: event.target.value
        })
    }

    const handleCandidae = (uv) => {
        const _path = RoutePaths.CanInfo.replace(':id', uv.nguoi_dung.first_name)
        history.push(_path, {
            ungvien: uv,
            nguoidungId: userData.nguoi_dung.id
        });
    }

    const taoBaiViet = () => {
        history.push(RoutePaths.NewPost, {
            nguoidungId: userData.nguoi_dung.id
        })
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} xs={12}>
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

                    {/* Các bài viết đã đăng */}
                    <Typography variant="h3" className={classes.titleInfo}>Bài viết đã đăng</Typography>
                    {loading ? <p>Loading ...</p> :
                        <AppTable columns={JOB_TABLE} data={danhSachViecLam} handleChoose={handleChoose} />
                    }
                    <Button
                        onClick={taoBaiViet}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >Thêm mới</Button>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h4" className={classes.titleInfo}>Tìm kiếm ứng viên</Typography>
                    <Grid container spacing={1} xs={12}>
                        <Grid item xs={6}>
                            <AppSelectSingle tags={degrees} field={TAG.bang_cap} onChange={(e) => handleSelectChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <AppSelectSingle tags={experiences} field={TAG.kinh_nghiem} onChange={(e) => handleSelectChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <AppSelectSingle tags={skills} field={TAG.ky_nang} onChange={(e) => handleSelectChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <AppSelectSingle tags={careers} field={TAG.nganh_nghe} onChange={(e) => handleSelectChange(e)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={locUngVien}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.search}
                            >Tìm kiếm</Button>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3} xs={12}>
                        {ketQua.results.length > 0 ? ketQua.results.map((uv, idx) => (
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {uv.nguoi_dung.last_name} {uv.nguoi_dung.first_name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {(uv.gioi_thieu).substr(0, 50)}...
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => handleCandidae(uv)} size="medium" color="primary">Xem hồ sơ</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) : (<></>)}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}