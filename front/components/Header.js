import Link from 'next/link';
import { GlobalContext } from './GlobalContext';


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
            <Navigation title="Home" page="/" />
            <Navigation title="About Us" page="/aboutUs" />
            <Navigation title="Dashboard" page={state.page} />
            <Navigation title="Opportunities" page="/opps" />
            <Navigation title="Log In" page="/login" />
        </div>
    )
}

export default Header;