import React, { createRef, useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    FormControl,
    CircularProgress,
    Select,
    InputLabel,
    Container,
    Chip,
    Divider,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import API, { endpoints } from '../../helpers/API';
// import { ACCOUNT, INFO, JOB_TABLE, TAG } from './HomeRecruiter.const';
import { useStyles } from './CanInfo.styles';
import cookies from 'react-cookies';
import { useHistory, useLocation } from 'react-router';
import { RoutePaths } from '../../routes/public-route';
import AppSelectSingle from '../../components/AppSelectSingle';
import moment from "moment";

const CONG_VIEC = {
    id: 'job',
    label: 'Công việc'
}

const VAI_TRO = {
    UNG_VIEN: "UNG VIEN",
    TUYEN_DUNG: "TUYEN DUNG",
    QUAN_LY: "QUAN LY",
};
const TRANG_THAI_UNG_TUYEN = {
    DUOC_CHAP_NHAN: "CHAP NHAN",
    BI_TU_CHOI: "TU CHOI",
    CHO_XU_LY: "CHO XU LY",
};

export default function CanInfoPage() {
    const classes = useStyles();
    const history = useHistory();

    const { state } = useLocation();
    const vieclamId = state.vieclamId;
    const tenViecLam = state.tenViecLam;

    // Lấy thông tin việc làm của nhà tuyển dụng hiện tại (gửi yêu cầu công việc cho ứng viên)
    const [danhSachViecLam, setDanhSachViecLam] = useState([])
    const getViecLam = async () => {
        const res = await API.get(endpoints["nha-tuyen-dung-viec-lam"](state.nguoidungId))
        setDanhSachViecLam(res.data)
        console.log('getvieclam', res.data)
        console.log('getvieclam []', res.data[0])

    }

    const [selectGuiViecLam, setSelectGuiViecLam] = useState(0);


    // Gọi khi nút chấp nhận hồ sơ hoặc gửi đề nghị việc làm được nhấn, ghi dữ liệu vào bảng ứng tuyển
    const ungTuyen = async (trangThaiHoSo = TRANG_THAI_UNG_TUYEN.DUOC_CHAP_NHAN, viecLamId = vieclamId, ungVienNopDon = true) => {
        try {
            // Nếu như nhà tuyển dụng đang xem từ bộ lọc (không phải từ thông báo)
            if (viecLamId === 0) {
                viecLamId = selectGuiViecLam;
                trangThaiHoSo = TRANG_THAI_UNG_TUYEN.CHO_XU_LY;
                ungVienNopDon = false;
            }

            // Tiến hàng gọi server ghi dữ liệu
            const create = await API.post(endpoints["ung-tuyen"], {
                viec_lam: viecLamId,
                ung_vien: state.ungvien.nguoi_dung.id,
                trang_thai_ho_so: trangThaiHoSo,
                ung_vien_nop_don: ungVienNopDon,
                nguoi_yeu_cau: VAI_TRO.TUYEN_DUNG
            })

            // Nếu cập nhật bản ghi dưới csdl thành công
            if (create.status === 200) {
                alert("Cập nhật trạng thái thành công!");
                history.push(RoutePaths.HomeRecruiter)
            } else if (create.status === 201) {
                alert("Gửi đề nghị việc làm thành công!")
            } else if (create.status === 409)
                alert("Ứng viên đã ứng tuyển công việc này rồi, xem thông báo để cập nhật hồ sơ")

        } catch (ex) {
            // console.log(ex.response.status)
            if (ex.response.status === 409)
                alert("Ứng viên đã ứng tuyển công việc này rồi, xem thông báo để cập nhật hồ sơ")
        }
    }

    //  hiểu đơn giản là load trang
    useEffect(() => {
        async function init() {
            await getViecLam()
        }
        init()
        console.info('state', state)
    }, [])

    // Render icon ngành nghề này kia gọn hơn
    const infoDetail = (item) => {
        return (
            <div>
                <Typography variant="body1" className={classes.tag}>{item.title}</Typography>
                {(item.arr).length > 0
                    ? (item.arr).map(i => {
                        return <Chip className={classes.tagItem} label={i.ten} color="primary" />
                    })
                    : <span className="text-muted">Không có bản ghi</span>
                }
            </div>
        );
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} xs={12}>
                <Grid item xs={8}>
                    <Typography variant="h3" className={classes.title}>Thông tin ứng viên {state.ungvien.nguoi_dung.first_name}</Typography>
                    <Grid container spacing={4} xs={12}>
                        {/* thông tin người dùng */}
                        <Grid item xs={4}>
                            <div>ảnh</div>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography className={classes.text} variant="body1" >Tên ứng viên: {state.ungvien.nguoi_dung.last_name} {state.ungvien.nguoi_dung.first_name}</Typography>
                            <Typography className={classes.text} variant="body1" >Ngày sinh: {state.ungvien.nguoi_dung.last_name}</Typography>
                            <Typography className={classes.text} variant="body1" >Email: {state.ungvien.nguoi_dung.email}</Typography>
                            <Typography className={classes.text} variant="body1" >CV: {state.ungvien.cv}</Typography>
                            <Typography className={classes.text} variant="body1" >Giới thiệu: {state.ungvien.gioi_thieu}</Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <Divider />
                            {infoDetail({ title: 'Bằng cấp', arr: state.ungvien.bang_cap })}
                        </Grid>
                        <Grid item xs={6}>
                            <Divider />
                            {infoDetail({ title: 'Ngành nghề', arr: state.ungvien.nganh_nghe })}
                        </Grid>
                        <Grid item xs={6}>
                            <Divider />
                            {infoDetail({ title: 'Kinh nghiệm', arr: state.ungvien.kinh_nghiem })}
                        </Grid>
                        <Grid item xs={6}>
                            <Divider />
                            {infoDetail({ title: 'Kỹ năng', arr: state.ungvien.ky_nang })}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h5" className={classes.tool}>Bảng điều khiển</Typography>
                    {vieclamId === 0 ? (
                        <>
                            <Typography className={classes.toolText} variant="body1" >Gửi đề nghị công việc cho ứng viên này</Typography>
                            <div>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel htmlFor={`outlined-job-native-simple`}>Công việc</InputLabel>
                                    <Select
                                        native
                                        onChange={(event) => setSelectGuiViecLam(event.target.value)}
                                        label='Công việc'
                                        inputProps={{
                                            name: 'job',
                                            id: `outlined-job-native-simple`,
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        {danhSachViecLam.map((t, idx) => {
                                            return (
                                                <option key={idx + t.id} value={t.id}>{t.tieu_de}</option>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <Button
                                fullWidth
                                className={classes.submit}
                                color='primary'
                                variant="contained"
                                onClick={() => ungTuyen()}
                            >Gửi đề nghị việc làm</Button>
                        </>
                    ) : (
                        <>
                            {/* <p>Bạn có chấp nhận ứng viên này vào vị trí <span className="text-primary fw-bold">{tenViecLam}</span> không?</p> */}
                            <Button
                                fullWidth
                                className={classes.submit}
                                color='primary'
                                variant="contained"
                                onClick={() => ungTuyen()}
                            >Chấp nhận hồ sơ</Button>
                            <Button
                                fullWidth
                                className={classes.submit}
                                color='primary'
                                variant="contained"
                                onClick={() => ungTuyen(TRANG_THAI_UNG_TUYEN.BI_TU_CHOI)}
                            >Từ chối hồ sơ</Button>
                        </>
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}