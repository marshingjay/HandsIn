import React, { useReducer } from "react";
import App from "next/app";
import { GlobalProvider } from "../components/GlobalContext";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import "rc-calendar/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/app.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <GlobalProvider value={this.state}>
                <Component {...pageProps} />
            </GlobalProvider>
        );
    }
}

export default MyApp;
