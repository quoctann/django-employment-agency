import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



// const login = async (event) => {
//     event.preventDefault()
//     let res = await API.post(endpoints['login'], {
//       client_id: "yTpw0WvqEupdDtSvfL8FYpqhGli00rvQUhdvXKis",
//       client_secret: "6PDLc1LJTUTj1zewi5cRRotemG0X4OUXhoq5WTMHyOkabthhVtaiXXWY5t28O5DbfGT8gxvany4vJoLVPqCXOK6vL6S1DAc6dT0RYSuNvYFQiU2mJerH6h17Qd9F9JDV",
//       username: username,
//       password: password,
//       grant_type: "password",
//     })
//     console.info(res.data)

//     cookies.save("access_token", res.data.access_token)

//     let user = await API.get(endpoints['current-user'], {
//       headers: {
//         Authorization: `Bearer ${cookies.load("access_token")}`
//       }
//     });
//     console.info(user.data)
//     cookies.save("user", user.data)

//     dispatch({
//       "type": "login",
//       "payload": user.data
//     })

//     // setUser(user)
//     setLogin(true)
//   }


// if (islogin) {
//     return <Redirect to="/" />
//   }
//   else {
  
//   }