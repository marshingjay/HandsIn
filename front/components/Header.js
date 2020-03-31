import Link from 'next/link';
import { GlobalContext } from './GlobalContext';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const linkStyle = {
    marginRight: 15
}

const Navigation = props => (
    <Link href={props.page}>
        <a style={linkStyle}>{props.title}</a>
    </Link>
)


function Header() {
    const state = React.useContext(GlobalContext);
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
            />{' '}
            HandsIn
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={state.page}>Dashboard</Nav.Link>
            <Nav.Link href="/opps">Opportunities</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        // <div style = {{width:"110%"}}>
        //     <title>HandsIn</title>
        //     <AppBar position="static">
        //         <ToolBar>
        //             <img src={"/static/logo.png"} alt="logo"/>
        //             <Typography variant="h3" style={{marginLeft: '25px', marginRight: '25px'}}>
        //                 HandsIn
        //             </Typography>
        //             <Button
        //                 href="/"
        //                 variant="contained"
        //                 color="primary"
        //                 style={{color: '#FFF', marginLeft: '15px'}}>
        //                     Home
        //             </Button>
        //             <Button
        //                 href="/aboutus"
        //                 variant="contained"
        //                 color="primary"
        //                 style={{color: '#FFF', marginLeft: '15px'}}>
        //                     About Us
        //             </Button>
        //             <Button
        //                 href={state.page}
        //                 variant="contained"
        //                 color="primary"
        //                 style={{color: '#FFF', marginLeft: '15px'}}>
        //                     Dashboard
        //             </Button>
        //             <Button
        //                 href="/opps"
        //                 variant="contained"
        //                 color="primary"
        //                 style={{color: '#FFF', marginLeft: '15px'}}>
        //                     Opportunities
        //             </Button>
        //             <Button
        //                 href="/login"
        //                 variant="contained"
        //                 color="primary"
        //                 style={{color: '#FFF', marginLeft: '15px'}}>
        //                     Login
        //             </Button>
        //         </ToolBar>
        //     </AppBar>
        // </div>
    )
}

export default Header;