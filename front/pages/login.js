import Layout from '../components/TheLayout';
import React, { useContext, useState, useCallback } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import Router from 'next/router';
import ls from 'local-storage';

import { GlobalConsumer } from '../components/GlobalContext';
import GlobalContext from "./"

const linkStyle = {
    marginRight: 15
}


const Login = () => {

    const forceUpdate = React.useState()[1].bind(null, {});

    // need this to change the isLoggedIn state of the header
    // also will change the state if isVolunteer depending on how they log in
    // const updateLinks = (context) => {
    //     if (context.isLoggedIn == true) {
    //         context.updatePage(context.type);
    //         // state.page = state.type;
    //     } else {
    //         context.updatePage("/login");
    //         // state.page = "\login";
    //     }
    // }

    // function updateLinks (isLoggedIn) {
    //     if(isLoggedIn){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function handleSubmit(context, forceUpdate) {
        context.updateIsLoggedIn(true);
        // state.isLoggedIn = true;
        // state.type = acctType;
        // state.page = acctType;
        // context.isLoggedIn.set(true);
        // context.page.set(acctType);
        
        forceUpdate();

        updateLinks(context);

        Router.push(context.type);
    }
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [acctType, setAcctType] = useState("");

    // const [state, dispatch] = useContext(GlobalContext);

    function validate(email, password, type) {
        // return email.length > 0 && password.length > 0 && acctType != "";
        return email.length > 0 && password.length > 0 && type != "";
    }

    return (
        // <GlobalConsumer>
            // {context => (
                <Layout>
                    <form>
                        <FormGroup>
                            {/* <ControlLabel>Email</ControlLabel> */}
                            <FormControl
                                autoFocus
                                type="email"
                                placeholder="Email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                onChange={(e) => {context.updateEmail(e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup>
                            {/* <label>Password</label> */}
                            <FormControl
                                autoFocus
                                type="password"
                                placeholder="password"
                                // onChange={(e) => setPassword(e.target.value)}
                                onChange={(e) => {context.updatePassword(e.target.value)}}
                            />
                        </FormGroup>
                        {/* <FormGroup onChange={(e) => setAcctType(e.target.value)}> */}
                        <FormGroup onChange={(e) => {context.updateType(e.target.value)}}
                        >
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
                    <button onClick={() => {
                        context.updateIsLoggedIn(true);
                        context.updatePage(context.type);
                        // forceUpdate();
                        Router.push(context.type)
                        }} disabled={!validate(context.email, context.password, context.type)}>Login</button>
                    {/* <button onClick={() => handleSubmit(context, forceUpdate)} disabled={!validate(context.email, context.password, context.type)}>Login</button> */}

                </Layout>
            // )}
        // </GlobalConsumer>
    )
}

export default Login;