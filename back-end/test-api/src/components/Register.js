import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormItem from "./FormItem";
import { useLocation } from "react-router-dom";
import API, { endpoints } from "../api/API";

export default function Register(props) {
	const [inputs, setInputs] = useState({});
	
	// Để lấy req param, gọi .get(tên) với tên là ?tên=giá-trị
	const query = new URLSearchParams(useLocation().search);

	let role = query.get("type");

	let isValid = true;

	const avatar = React.createRef();

	const cv = React.createRef();

	const handleSubmit = (event) => {
		if (event) {
			event.preventDefault();
		}
		register();
	};

	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};

	const register = async () => {
		if (inputs.password === inputs.confirm_password) {
			const formData = new FormData();
			for (let k in inputs) {
				if (k !== "confirm_password") {
					// console.info(k, inputs[k]);
					formData.append(k, inputs[k]);
				}
			}
			formData.append("avatar", avatar.current.files[0]);
			if(role === "ungvien")
				formData.append("cv", cv.current.files[0]);

			switch(role) {
				case 'ungvien':
					formData.append("vai_tro", "UNG VIEN");
					break;
				case 'tuyendung':
					formData.append("vai_tro", "TUYEN DUNG");
					break;
				default:
					isValid = false;
					alert("Invalid request!");
					break;
			}
			
			for (var key of formData.keys()) {
				console.log(key, formData.get(key));
			}
			if(isValid) {
				try {
					let res = await API.post(endpoints["users"], formData, {
						headers: {
							"Content-Type": "multipart/form-data"
						}
					})
					console.log(res);
				} catch(err) {
					console.log(err);
				}
			}
		}
	};

	let hidden, errEl, content;

	if (role !== "tuyendung" && role !== "ungvien") {
		hidden = {
			display: 'none',
		}
		errEl = <div className="alert alert-danger">Invalid param</div>;
	}

	if (role === "tuyendung") {
		content = (
			<>
			<Form.Group>
				<FormItem
					id="company"
					type="text"
					field={inputs.ten_cong_ty}
					change={handleInputChange}
					name="ten_cong_ty"
					label="Company Name"
				/>
			</Form.Group>
			<Form.Group>
				<FormItem
					id="companySize"
					type="text"
					field={inputs.quy_mo}
					change={handleInputChange}
					name="quy_mo"
					label="Company Size"
				/>
			</Form.Group>
			</>
		);
	}

	if (role === "ungvien") {
		content = (
			<>
			<Form.Group className="mb-3" controlId="cv">
				<Form.Label>Upload CV</Form.Label>
				<Form.Control type="file" ref={cv} />
			</Form.Group>
			<Form.Group>
				<FormItem
					id=""
					type="text"
					field={inputs.ngay_sinh}
					change={handleInputChange}
					name="ngay_sinh"
					label="Birthday"
				/>
			</Form.Group>
			</>
		);
	}

	return (
		<>
			{errEl}
			<h1 className="text-center text-primary my-3">
				Register
			</h1>
			<Form onSubmit={handleSubmit} style={hidden}>
				<Form.Group>
					<FormItem
						id="firstName"
						type="text"
						field={inputs.first_name}
						change={handleInputChange}
						name="first_name"
						label="First Name"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="lastName"
						type="text"
						field={inputs.last_name}
						change={handleInputChange}
						name="last_name"
						label="Last Name"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="email"
						type="email"
						field={inputs.email}
						change={handleInputChange}
						name="email"
						label="Email"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="username"
						type="text"
						field={inputs.username}
						change={handleInputChange}
						name="username"
						label="Username"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="password"
						type="password"
						field={inputs.password}
						change={handleInputChange}
						name="password"
						label="Password"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="confirmPassword"
						type="password"
						field={inputs.confirm_password}
						change={handleInputChange}
						name="confirm_password"
						label="Confirm Password"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="phone"
						type="text"
						field={inputs.so_dien_thoai}
						change={handleInputChange}
						name="so_dien_thoai"
						label="Phone number"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="address"
						type="text"
						field={inputs.address}
						change={handleInputChange}
						name="dia_chi"
						label="Address"
					/>
				</Form.Group>

				<Form.Group>
					<FormItem
						id="introduction"
						type="text"
						field={inputs.introduction}
						change={handleInputChange}
						name="gioi_thieu"
						label="Introduction"
					/>
				</Form.Group>

				{content}

				<Form.Group className="mb-3" controlId="avatar">
					<Form.Label>Avatar</Form.Label>
					<Form.Control type="file" ref={avatar} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit now
				</Button>
			</Form>
		</>
	);
}
