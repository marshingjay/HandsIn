import React from 'react';


const defaultState = {
    isLoggedIn: false,
    type: "\orgDash",
    page: "\login"
};

const GlobalContext = React.createContext({...defaultState});

const GlobalProvider = (props) => {
    return (
        <GlobalContext.Provider value={defaultState}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider};
