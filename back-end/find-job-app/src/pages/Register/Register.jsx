import React, { createRef, useState } from 'react';
import {
  CardMedia,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './Register-styles';
import AvatarDefault from '../../assets/images/avatarDefault.jpg';
import API, { endpoints } from '../../helpers/API';
import useSubmitForm from '../../helpers/CustomHooks'
import { useHistory } from 'react-router';
import { PublicRoutes } from '../../routes/public-route';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp(props) {
  const classes = useStyles();
  const avatar = createRef();
  const history = useHistory()
  const [open, setOpen] = useState(false);

  const register = async () => {
    const formData = new FormData();

    if (inputs.password === inputs.confirm_password) {
      for (let k in inputs) {
        if (k !== "confirm_password") formData.append(k, inputs[k]);
      }
    }

    formData.append("anh_dai_dien", avatar.current.files[0]);
    formData.append("vai_tro", "UNG VIEN");

    for (var key of formData.keys()) {
      console.log(key, formData.get(key));
    }

    try {
      let res = await API.post(endpoints["nguoi-dung"], formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res)
        setOpen(true);
    } catch (err) {
      console.log("ERROR:\n", err);
    }

  };

  const { inputs, handleInputChange, handleSubmit } = useSubmitForm(register);

  const handleCloseDialog = () => {
    setOpen(false);
    const _path = PublicRoutes.Login.path;
    history.push(_path);
  };

  return (
    <div>

      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h3">Đăng ký</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={4}  >
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={AvatarDefault}
                  title="Contemplative Reptile"
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  ref={avatar}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary"
                    maxWidth component="span">
                    Chọn ảnh
                  </Button>
                </label>
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h5">Thông tin người dùng</Typography>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      autoComplete="fname"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      type="text"
                      name="first_name"
                      value={inputs.first_name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      autoComplete="lname"
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      value={inputs.last_name}
                      onChange={handleInputChange}
                      name="last_name"
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={6} >
                    <TextField
                      autoComplete="email"
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      value={inputs.email}
                      onChange={handleInputChange}
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={6} >
                    <TextField
                      autoComplete="phone"
                      variant="outlined"
                      required
                      fullWidth
                      name="phone"
                      label="Số điện thoại"
                      type="number"
                      id="phone"
                      value={inputs.so_dien_thoai}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={6}  >
                  <Typography variant="h5">Tài khoản</Typography>
                  <Grid container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="username"
                        variant="outlined"
                        // required
                        fullWidth
                        name="username"
                        label="username"
                        type="text"
                        id="username"
                        value={inputs.username}
                        onChange={handleInputChange}
                        name="username"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        variant="outlined"
                        // required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={inputs.password}
                        onChange={handleInputChange}
                        name="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="ConfirmPassword"
                        variant="outlined"
                        required
                        // fullWidth
                        name="ConfirmPassword"
                        label="Confirm password"
                        type="password"
                        autoComplete="current-password"
                        value={inputs.confirm_password}
                        onChange={handleInputChange}
                        name="confirm_password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Tôi chấp nhận chính sách bảo mật."
                      />
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>




            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            {/* <Button color="primary" autoFocus>
            Sign Up
          </Button> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Đã có tài khoản? Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Bạn đã đăng ký thành công</DialogTitle>
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
  );
}