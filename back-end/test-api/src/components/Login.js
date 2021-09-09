import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import API, { endpoints } from "../api/API";
import cookies from "react-cookies";
import FormItem from "./common/FormItem"

export default function Login(props) {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	// const [isLogged, setIsLogged] = useState(false);

	const login = async (event) => {
		event.preventDefault();
		let res = await API.post(endpoints["login"], {
			client_id: "yTpw0WvqEupdDtSvfL8FYpqhGli00rvQUhdvXKis",
			client_secret: "6PDLc1LJTUTj1zewi5cRRotemG0X4OUXhoq5WTMHyOkabthhVtaiXXWY5t28O5DbfGT8gxvany4vJoLVPqCXOK6vL6S1DAc6dT0RYSuNvYFQiU2mJerH6h17Qd9F9JDV",
			username: username,
			password: password,
			grant_type: "password",
		});
        
        console.log("Get access token");
        console.log(res.data);
        cookies.save("access_token", res.data.access_token);
        
        let user = await API.get(endpoints["current-user"], {
            headers: {
                Authorization: `Bearer ${cookies.load("access_token")}`
            }
        });

        console.log("Get user data")
        console.log(user.data)
        cookies.save("user", user.data)
    };

	return (
		<>
			<h1 className="text-center text-primary my-3">Login</h1>
			<p>Hello {username}</p>
			<Form onSubmit={login}>
				<FormItem
					id="username"
                    label="Username"
					type="text"
					field={username}
					change={(event) => setUsername(event.target.value)}
					name="username"
				/>
				<FormItem
					id="password"
                    label="Password"
					type="password"
					field={password}
					change={(event) => setPassword(event.target.value)}
					name="password"
				/>
				<Button type="submit">Login</Button>
			</Form>
		</>
	);
}
