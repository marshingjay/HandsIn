import React, { useReducer } from 'react';

let reducer = (info, newInfo) => {
    return {...info, ...newInfo};
}

const defaultState = {
    isLoggedIn: false,
    type: "\orgDash",
    page: "\login"
};

const GlobalContext = React.createContext({...defaultState});

const GlobalProvider = (props) => {
    const [info, setInfo] = useReducer(reducer, defaultState);
    return (
        <GlobalContext.Provider value={{info, setInfo}}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider};


// const GlobalReducer = (state, action) => {
//     switch (action.type) {
//         case SET_STATES: 
//             return {
//                 ...state,
//                 isLoggedIn: { ...action.AisLoggedIn },
//                 isVolunteer: {...action.AisVolunteer }
//             }
//         default:
//             return state;
//     }
// };


// const UseGlobalState = () => {
//     const [state, setState] = useContext(GlobalContext);

//     const setTheState = ({ aisLoggedIn, aisVolunteer }) => {
//         setState({
//             type: SET_STATE,
//             isLoggedIn: aisLoggedIn,
//             isVolunteer: aisVolunteer
//         });
//     };

//     return {
//         setTheState,
//         isLoggedIn: { ...state.isLoggedIn },
//         isVolunteer: {...state.isVolunteer },
//     };
// };

// export default UseGlobalState;