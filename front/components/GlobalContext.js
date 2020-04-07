import React, {createContext} from 'react';
import ls from 'local-storage';

var localIsLoggedIn = ls.get('isLoggedIn') || false;
var localType = ls.get('type') || "/orgDash";
var localPage = ls.get('page') || "/login";
var localEmail = ls.get('email') || "";
var localPassword = ls.get('password') || "";


console.log("local log", localIsLoggedIn);

const GlobalContext = createContext({
    isLoggedIn: false,
    updateIsLoggedIn: () => {},
    type: "/orgDash",
    updateType: () => {},
    page: "/login",
    updatePage: () => {},
    email: "",
    updateEmail: () => {},
    password: "",
    updatePassword: () => {},
});

export class GlobalProvider extends React.Component {
    updateIsLoggedIn = newIsLoggedIn => {
        this.setState({isLoggedIn: newIsLoggedIn});
    };
    updateType = newType => {
        this.setState({type: newType});
    };
    updatePage = newPage => {
        this.setState({page: newPage});
    };
    updateEmail = newEmail => {
        this.setState({email: newEmail});
    };
    updatePassword = newPassword => {
        this.setState({password: newPassword});
    };

    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            updateIsLoggedIn: this.updateIsLoggedIn,
            type: localType,
            updateType: this.updateType,
            page: localPage,
            updatePage: this.updatePage,
            email: localEmail,
            updateEmail: this.updateEmail,
            password: localPassword,
            updatePassword: this.updatePassword
        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export const GlobalConsumer = GlobalContext.Consumer;

// import React, { useReducer, createContext } from 'react';
// // import Reducer from './Reducer';

// export const GlobalContext = createContext();

// const defaultState = {
//     isLoggedIn: false,
//     type: "/orgDash",
//     page: "/login",
//     email: "",
//     password: "",
//     acctType: "/orgDash"
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "LOGIN_STATE":
//             return {
//                 isLoggedIn: !state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_TYPE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: action.payload,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_PAGE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: action.payload,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_EMAIL":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: action.payload,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_PASSWORD":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: action.payload,
//                 acctType: state.acctType
//             };  
//         case "CHANGE_ACCTTYPE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: action.payload
//             }; 
//         default: 
//             throw new Error();
//     }
// };

// export const GlobalProvider = props => {
//     const [state, dispatch] = useReducer(reducer, defaultState);

//     return (
//         <GlobalContext.Provider value={[state, dispatch]}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// };

// const GlobalContext = React.createContext({});

// const Store = ({children}) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [acctType, setAcctType] = useState("");
//     const [page, setPage] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState("");   
     
//     return (
//         <GlobalContext.Provider value={store}>
//             {children}
//         </GlobalContext.Provider>
//     )
// };

// export const GlobalContext = createContext(defaultState);
// export default Store;

// const GlobalProvider = (props) => {
//     // let initialState = {
//     //     email: "",
//     //     password: "",
//     //     acctType: "",
//     //     page: "",
//     //     isLoggedIn: false
//     // }
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [acctType, setAcctType] = useState("");
//     const [page, setPage] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState("");

//     const store = {
//         email: { get: email, set: setEmail},
//         password: { get: password, set: setPassword},
//         acctType: { get: acctType, set: setAcctType},
//         page: { get: page, set: setPage},
//         isLoggedIn: { get: isLoggedIn, set: setIsLoggedIn}
//     }

//     return (
//         <GlobalContext.Provider value={store}>
//             {props.children}
//         </GlobalContext.Provider>
//     );
// };

// export {GlobalContext, GlobalProvider};
