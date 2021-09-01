import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormItem from "./common/FormItem";
import API, { endpoints } from "../api/API";

export default function Register(props) {
	const [inputs, setInputs] = useState({});

	const avatar = React.createRef();

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
        console.info(avatar)
		if (inputs.password === inputs.confirm_password) {
			const formData = new FormData();
			for (let k in inputs) {
				if (k !== "confirm_password") {
                    console.info(k, inputs[k])
					formData.append(k, inputs[k]);
				}
			}
            formData.append("avatar", avatar.current.files[0]);

            console.log(formData)

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
	};

	return (
		<>
			<h1 className="text-center text-primary my-3">Register</h1>
			<Form onSubmit={handleSubmit}>
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
