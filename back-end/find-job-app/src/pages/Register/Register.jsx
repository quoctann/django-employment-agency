import React, { useState } from 'react';
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
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './Register-styles';
import AvatarDefault from '../../assets/images/avatarDefault.jpg';
import API, { endpoints } from '../../helpers/API';
import axios from 'axios';
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

export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const handleAvatar_click = (j) => {
    console.info('choose avatar')
  }

  const handleChangeUsername = (e) => {
    setUsername({ username: e.target.value });
  }

  const handleAlert = () => {
    console.info("submit", username);
  }

  const handleApply_click = () => {
    console.info("submit", username);
    // console.info('j', j)
    addUser();
    // setOpen(true);
  };

  // const addUser = async () => {
  //   const body = {
  //     "first_name": "",
  //     "last_name": "",
  //     "email": "",
  //     "username": username,
  //     "password": '123',
  //     "anh_dai_dien": null,
  //     "so_dien_thoai": null
  //   }
  //   let res = await API.post(endpoints['nguoidungs'], body, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     }
  //   })
  //   // let res = await axios.post("http://127.0.0.1:8000/users/", body)
  //   let data = res.data
  //   console.info("========== addUser ========")
  //   console.info('data', data)
  // }

  const addUser = async () => {
    const formData = new FormData();
    formData.append("username", username)
    let res = await API.post(endpoints['nguoidungs'], formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })   
    // let res = await axios.post("http://127.0.0.1:8000/users/", body)
    let data = res.data
    console.info("========== addUser ========")
    console.info('data', data)
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h3">Đăng ký</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={4}  >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={AvatarDefault}
                title="Contemplative Reptile"
                onClick={() => handleAvatar_click()}
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary"
                  maxWidth component="span">
                  Chọn ảnh
                </Button>
              </label>
            </Grid> */}

            <Grid item xs={8}>
              <Typography variant="h5">Thông tin người dùng</Typography>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
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
                    name="lastName"
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
                      onChange={handleChangeUsername}
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




          {/* <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleApply_click()}
          >
            Sign Up
          </Button> */}
          <Button onClick={handleApply_click} color="primary" autoFocus>
            Sign Up
          </Button>
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
  );
}