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

export default function Login(props) {
  const classes = useStyles();
  const [isLogged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const login = async (event) => {
    event.preventDefault();
    const info = await API.get(endpoints["oauth2-info"]);
    const res = await API.post(endpoints["login"], {
      client_id: info.data.client_id,
      client_secret: info.data.client_secret,
      username: username,
      password: password,
      grant_type: "password",
    })

    // console.info('res.data', res.data)
    cookies.save("access_token", res.data.access_token)

    let user = await API.get(endpoints['current-user'], {
      headers: {
        Authorization: `Bearer ${cookies.load("access_token")}`
      }
    })
    console.info('user.data', user.data)
    cookies.save("user", user.data);
    dispatch({
      "type": "login",
      "payload": user.data
    })
    setLogged(true);
  }

  if (isLogged)
    return <Redirect to="/" />
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
          <form className={classes.form} onSubmit={login}>
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
              value={username}
              onChange={e => setUsername(e.target.value)}
            // value={inputs.username}
            // onChange={handleInputChange}
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
              onChange={e => setPassword(e.target.value)}
              value={password}
            // onChange={handleInputChange}
            // value={inputs.password}
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
