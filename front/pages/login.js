import Layout from '../components/TheLayout';
import React, { useContext, useState, useCallback } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import Router from 'next/router'

import { GlobalContext } from '../components/GlobalContext';

const linkStyle = {
    marginRight: 15
}

// need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in
const updateLinks = (state) => {
    if (state.isLoggedIn == true) {
        state.page = state.type;
    } else {
        state.page = "\login";
    }
}

function handleSubmit(state, acctType, forceUpdate) {
    state.isLoggedIn = true;
    state.type = acctType;
    state.page = acctType;
    updateLinks(state);

    forceUpdate();

    Router.push(state.type);
}


const Login = () => {

    const forceUpdate = React.useState()[1].bind(null, {})

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acctType, setAcctType] = useState("");

    const state = useContext(GlobalContext);

    function validate() {
        if (email.length > 0 && password.length > 0 && acctType != ""){
            GlobalContext.username = email;
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <Layout>
            <form>
                <FormGroup>
                    {/* <ControlLabel>Email</ControlLabel> */}
                    <FormControl
                        autoFocus
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    {/* <label>Password</label> */}
                    <FormControl
                        autoFocus
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup onChange={(e) => setAcctType(e.target.value)}>
                    {/* <ControlLabel>Password</ControlLabel> */}
                    <FormControl
                        autoFocus
                        type="radio"
                        name="acctType"
                        value="/userDash"
                        placeholder="Volunteer Account"
                    /><label>Volunteer Account</label>
                    <FormControl
                        autoFocus
                        type="radio"
                        name="acctType"
                        value="/orgDash"
                        placeholder="Organization Account"
                    /><label>Organization Account</label>
                </FormGroup>

            </form>
            <button onClick={() => handleSubmit(state, acctType, forceUpdate)} disabled={!validate()}>Login</button>

        </Layout>
    )
}

export default Login;