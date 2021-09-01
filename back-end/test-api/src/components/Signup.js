import useSignUpForm from "./CustomHooks";

const Signup = () => {

	const signup = () => {
		console.info(inputs)
	}

	const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

	return (
		<>
			<h1 className="text-center text-primary my-3">Test sign up</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>First Name</label>
					<input onChange={handleInputChange} value={inputs.firstName} type="text" name="firstName" required />
					<label>Last Name</label>
					<input onChange={handleInputChange} value={inputs.lastName} type="text" name="lastName" required />
				</div>
				<div>
					<label>Email Address</label>
					<input onChange={handleInputChange} value={inputs.email} type="email" name="email" required />
				</div>
				<div>
					<label>Password</label>
					<input onChange={handleInputChange} value={inputs.password} type="password" name="password1" />
				</div>
				<div>
					<label>Re-enter Password</label>
					<input onChange={handleInputChange} value={inputs.password2} type="password" name="password2" />
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default Signup;
