import Link from 'next/link';
import { GlobalContext } from './GlobalContext';


// function Decide(props) {
//     if(props.state.isLoggedIn == false){
//         return (
//             <div>
//                 <div>1state falseyyyy {props.state.isLoggedIn}</div>
//                 <Navigation title="Dashboard" page="/login" />
//             </div>
            
//         )
//     }
//     else {
//         if (props.state.isVolunteer == true){
//             return (
//                 <div>
//                     <div>2state {props.state.isLoggedIn}</div>
//                     <Navigation title="Dashboard" page="/userDash" />
//                 </div>
                
//             )
//         } else {
//             return (
//                 <div>
//                     <Navigation title="Dashboard" page="/orgDash" />
//                     <div>3state {props.state.isLoggedIn}</div>
//                 </div>
                
//             )
//         }
//     }
// }

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
    // const [state, setState] = React.useContext(GlobalContext);
    // useEffect(() => {
    //     <Decide title="Dashboard" state={state} />
    // })
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