import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Header />

				<Switch>
					<Route exact path="/" component={Body} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/test" component={Signup} />
				</Switch>

				<Footer />
			</Container>
		</BrowserRouter>
	);
}

export default App;
