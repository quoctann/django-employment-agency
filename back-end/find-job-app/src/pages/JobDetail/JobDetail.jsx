import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import API, { endpoints } from '../../helpers/API';
import { useHistory, useLocation } from "react-router-dom";
import {
  createTheme,
  withStyles,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { PublicRoutes } from '../../routes/public-route';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function JobDetail() {
  const classes = useStyles();
  const { state } = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [recruiter, setRecruiter] = useState([]);

  useEffect(() => {
    // console.info('loading')
    async function init() {
      setLoading(true)
      await fetchRecruiter()
    }
    init()
  }, [])

  const fetchRecruiter = async () => {
    setTimeout(() => {
      API.get(`${endpoints['nhatuyendungs']}${state?.job?.nha_tuyen_dung}/`).then(res => {
        console.info('recruiters_info_after_click: ', res.data)
        setRecruiter(res.data)
        setLoading(false)
      })
    }, 500);
  }

  const handleApply_click = (j) => {
    console.info('nộp đơn')
    // console.info('j', j)
    addApply(j)
    setOpen(true);
  };

  const addApply = async (jobId) => {
    const body = {
      "trang_thai_ho_so": "CHAP NHAN",
      "viec_lam": jobId,
      "ung_vien": 3
    }
    let res = await API.post(endpoints['ungtuyens'], body)
    // let res = await axios.post("http://127.0.0.1:8000/ungtuyens/", body)
    let data = res.data
    console.info("========== addApply ========")
    console.info(data)
  }

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleRecruiter_click = (r) => {
    console.info('handleRecruiter_click: ', r)
    const _path = PublicRoutes.RecruiterInfo.path.replace(":id", r.nguoi_dung)
    history.push(_path, {
      recruiter: r,
    })
  };

  return (
    <div>
      {loading ? <h1>Loading . . .</h1> : (
        <div>
          <Container maxWidth='md'>


            <ColorButton onClick={() => handleApply_click(state?.job?.id)}
              variant="contained" color="primary" className={classes.margin}>
              Nộp đơn
            </ColorButton>

            <h1 onClick={() => handleRecruiter_click(recruiter)}>Công ty {recruiter.ten_cong_ty}</h1>

            <Typography variant="h5" >
              Các phúc lợi dành cho bạn
            </Typography>
            {state?.job?.phuc_loi.map(j =>
              <Typography variant="subtitle1" gutterBottom>
                {j.ten}
              </Typography>
            )}
            <Divider />

            <Typography variant="h5" >
              Mô tả công việc
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {/* {job.noi_dung} */}
              {`${state?.job?.noi_dung}`}
            </Typography>
            <Divider />

            <Typography variant="h5" >
              Yêu cầu
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              kĩ năng + kinh nghiệm
            </Typography>
            <Divider />

            <Typography variant="h5" >
              Địa điểm làm việc
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {recruiter.dia_chi}
            </Typography>
            <Divider />
          </Container>

          <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Ứng tuyển "}{state?.job?.tieu_de}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Bạn đã nộp đơn thành công
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary" autoFocus>
                Đồng ý
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}