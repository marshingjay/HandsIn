import React, { useReducer } from "react";
import App from "next/app";
import { GlobalProvider } from "../components/GlobalContext";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import "rc-calendar/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            type: "/orgDash",
            page: "/login",
            email: "",
            password: ""
        };
    }

    updateValue = (key, val) => {
        this.setState({[key]: val});
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <GlobalProvider value={{state: this.state, updateValue: this.updateValue}}>
                <Component {...pageProps} />
            </GlobalProvider>
        );
    }
}

export default MyApp;
