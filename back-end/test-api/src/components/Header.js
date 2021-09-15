import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Headers() {
	return (
		<>
			<Navbar bg="light">
				<Container>
					<Navbar.Brand href="#home">Test API</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Nav className="me-auto">
							<Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/login">Login</Link>
                            </Nav.Link>
							<NavDropdown title="Register" id="navbarScrollingDropdown">
								<NavDropdown.Item href="/register?type=tuyendung">For Hiring</NavDropdown.Item>
								<NavDropdown.Item href="/register?type=ungvien">For Employee</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
                                <Link to="/test">Test form</Link>
                            </Nav.Link>
						</Nav>
				</Container>
			</Navbar>
		</>
	);
}
