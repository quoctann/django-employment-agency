import React, { useState } from "react";
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
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./Register-styles";
import AvatarDefault from "../../assets/images/avatarDefault.jpg";
import API, { endpoints } from "../../helpers/API";
import axios from "axios";
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function SignUp() {
	const [inputs, setInputs] = useState({});

	const avatar = React.createRef();

	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};

	const register = async () => {
		const formData = new FormData();

		if (inputs["password"][0] === inputs["confirm_password"][0]) {
			for (let k in inputs) {
				if (k !== "confirm_password") formData.append(k, inputs[k]);
			}
			formData.append("anh_dai_dien", avatar.current.files[0]);
			formData.append("vai_tro", "UNG VIEN");
		}

		for (var key of formData.keys()) {
			console.log(key, ": ", formData.get(key));
		}
		try {
			const res = await API.post(endpoints["nguoidungs"], formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (event) => {
		if (event) {
			event.preventDefault();
		}
		register();
	};

	const classes = useStyles();
	const [username, setUsername] = useState("");
	const handleAvatar_click = (j) => {
		console.info("choose avatar");
	};

	const handleChangeUsername = (e) => {
		setUsername({ username: e.target.value });
	};

	const handleAlert = () => {
		console.info("submit", username);
	};

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
		formData.append("username", username);
		let res = await API.post(endpoints["nguoidungs"], formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		// let res = await axios.post("http://127.0.0.1:8000/users/", body)
		let data = res.data;
		console.info("========== addUser ========");
		console.info("data", data);
	};

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography variant="h3">Đăng ký</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit}
				>
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
							<Typography variant="h5">
								Thông tin người dùng
							</Typography>
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
										name="lastName"
										value={inputs.last_name}
										onChange={handleInputChange}
									/>
								</Grid>
							</Grid>
							<Grid container xs={12} spacing={2}>
								<Grid item xs={6}>
									<TextField
										autoComplete="email"
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										value={inputs.email}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={6}>
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

							<Grid item xs={6}>
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
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="ConfirmPassword"
											variant="outlined"
											required
											// fullWidth
											name="confirm_password"
											label="Confirm password"
											type="password"
											autoComplete="current-password"
											value={inputs.confirm_password}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControlLabel
											control={
												<Checkbox
													value="allowExtraEmails"
													color="primary"
												/>
											}
											label="Tôi chấp nhận chính sách bảo mật."
										/>
									</Grid>
									<input type="file" ref={avatar} />
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
					<Button type="submit" color="primary" autoFocus>
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
