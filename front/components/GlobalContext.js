import React, {useState} from 'react';


const defaultState = {
    isLoggedIn: "false",
    isVolunteer: false
};

// const GlobalContext = React.createContext([{}, () => {}]);
const GlobalContext = React.createContext({...defaultState});

const GlobalProvider = (props) => {
    const [state, setState] = useState({...defaultState});
    return (
        <GlobalContext.Provider value={[state, setState]}>
            
        {/* // <GlobalContext.Provider value="green"> */}
            {props.children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalProvider};