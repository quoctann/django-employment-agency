import React, { useState, useEffect } from 'react';
import {
  Avatar,
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
import { useStyles } from "./Login-styles";
import API, { endpoints } from '../../helpers/API';
import cookies from 'react-cookies';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import useSubmitForm from "../../helpers/CustomHooks";
import { connect } from "react-redux";
import { login } from "../../redux/actions/actions";


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

const LoginPage = (props) => {
  const classes = useStyles();

  const login = async () => {
    try {
      const info = await API.get(endpoints["oauth2-info"]);
      const res = await API.post(endpoints["login"], {
        client_id: info.data.client_id,
        client_secret: info.data.client_secret,
        username: inputs.username,
        password: inputs.password,
        grant_type: "password",
      });

      console.info('res.data: \n', res.data);
      cookies.save("access_token", res.data.access_token);

      const user = await API.get(endpoints["current-user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });

      console.log("user data: \n", user.data)
      cookies.save("user", user.data);

      cookies.save("user", user.data);
      // Dispatch lên store thông tin user (ko render trang này nữa)
      props.signIn(cookies.load("user"));
      console.log("FROM LOGIN\n", props.userData.userReducer);
    } catch (err) {
      console.log(err);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useSubmitForm(login);

  // Nếu đã đăng nhập thì redirect về trang chủ
  if (
    cookies.load("user") ||
    props.userInfo.userReducer.hasOwnProperty("username")
  )
    return <Redirect to="/" />;
  else
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <form className={classes.form} noValidate method='POST' onSubmit={}> */}
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="current-username"
              autoFocus
              value={inputs.username}
              // onChange={() => handleInputChange()}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              value={inputs.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}
/*
  Redux connect() ko truyền gì cả vẫn sử dụng được, thông thường nó nhận 2
  tham số optional: state và dispatch để map tới props, dùng props để truy cập
  những thằng này thay vì gọi dispatch trực tiếp trong component. Lưu ý nên
  trả ra nguyên một state và khi sử dụng trong component cần gì thì trỏ đến
  chi tiết, để khi state nào thay đổi nó sẽ render lại chỉ component dùng
  state đó thôi
*/
export default connect(
  (state) => {
    return {
      userInfo: state,
    };
  },
  (dispatch) => {
    return {
      signIn: (user) => dispatch(login(user)),
    };
  }
)(LoginPage);