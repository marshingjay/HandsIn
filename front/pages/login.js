import Layout from '../components/TheLayout';
import React, { useContext, useState } from 'react';

import {GlobalContext} from '../components/GlobalContext';

// need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in

const Login = () => {
    // const [state, setState] = useContext(GlobalContext);
    const data = useContext(GlobalContext);
    // const {isLoggedIn, isVolunteer} = state;
    // const [isLoggedIn, setIsLoggedIn] = useState('');
    // const [state, setState] = useContext(GlobalContext);
    return (
        <Layout>
            <p>Login</p>
            {/* <select onChange={() => setIsLoggedIn((setUsername(true)))}>
                <option isLoggedIn={false}>Just place holding for state, select if NOT logged in</option>
                <option isLoggedIn={true}>Just place holding for state, select if logged in</option>
            </select>  */}

            <p>Here{data.isLoggedIn}</p>
            {/* <select onChange={(e) => handleType(e.target.value)}>
                <option isVolunteer={false}>Organization</option>
                <option isVolunteer={true}>Volunteer</option>
            </select>  */}
        </Layout>
    )
}

export default Login;