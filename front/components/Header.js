import Link from "next/link";
import { GlobalContext } from "./GlobalContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const linkStyle = {
    marginRight: 15
};

const Navigation = props => (
    <Link href={props.page}>
        <a style={linkStyle}>{props.title}</a>
    </Link>
);

function Header() {
    const state = React.useContext(GlobalContext);
    console.log(GlobalContext.username);
    
    if (GlobalContext.username == 'guest'){
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="../static/logo.PNG"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        HandsIn
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        
                        <Link href={state.page} passHref>
                        <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                        {/* <Nav.Link href={state.page}>Dashboard</Nav.Link> */}
                        
                        <Link href="/opps" passHref>
                        <Nav.Link>Opportunities</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/opps">Opportunities</Nav.Link> */}
                        
                        <Link href="/login" passHref>
                        <Nav.Link>Login</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> */}
                        
                        <Link href="/aboutus" passHref>
                        <Nav.Link>About Us</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/aboutus">About Us</Nav.Link> */}
    
                    </Nav>
                </Navbar>
            </div>
        );
    }
    else{
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="../static/logo.PNG"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        HandsIn
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        
                        <Link href={state.page} passHref>
                        <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                        {/* <Nav.Link href={state.page}>Dashboard</Nav.Link> */}
                        
                        <Link href="/opps" passHref>
                        <Nav.Link>Opportunities</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/opps">Opportunities</Nav.Link> */}
                        
                        
                        
                        <Link href="/aboutus" passHref>
                        <Nav.Link>About Us</Nav.Link>
                        </Link>
                        {/* <Nav.Link href="/aboutus">About Us</Nav.Link> */}
                    
                        <Nav.Link>Welcome, { GlobalContext.username }!</Nav.Link>
    
                    </Nav>
                </Navbar>
            </div>
        );
    }
    
}

export default Header;
