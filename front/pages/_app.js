import React, { useReducer } from 'react'
import App from 'next/app'
import { GlobalProvider } from '../components/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <GlobalProvider value={this.state}>
                <Component {...pageProps} />
            </GlobalProvider>
        );
    }
}

export default MyApp;