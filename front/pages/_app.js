import React, { useReducer } from 'react'
import App from 'next/app'
import { GlobalProvider } from '../components/GlobalContext';

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