import Link from 'next/link';
import {GlobalContext} from './GlobalContext';


function Decide(props) {
    if(props.isLoggedIn == false){
        return <Navigation title="Dashboard" page="/login" />
    }
    else {
        if (props.isVolunteer == true){
            return <Navigation title="Dashboard" page="/userDash" />
        } else {
            return <Navigation title="Dashboard" page="/orgDash" />
        }
    }
}

const linkStyle = {
    marginRight: 15
}

const Navigation = props => (
    <Link href={props.page}>
        <a style={linkStyle}>{props.title}</a>
    </Link>
)

const Header = (props) => {
    const data = React.useContext(GlobalContext);
    return (
        <div>
            <Navigation title="Home" page="/" />
            <Navigation title="About Us" page="/aboutUs" />
            {/* <Decide title="Dashboard" isVolunteer={data.isVolunteer} isLoggedIn={data.isLoggedIn} /> */}
            <Navigation title="Opportunities" page="/opps" />
            <Navigation title="Log In" page="/login" />
        </div>
    )
}

export default Header;