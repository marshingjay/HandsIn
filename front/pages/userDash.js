
import React from "react";
import Layout from "../components/TheLayout";
// import Calendar from "../components/Calendar";
import DashSetup from "../components/DashSetup";

export default class UserDash extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#D3D3D3', height: '100vh', width: '100%'}}>
                <Layout>
                    {/* <Calendar/> */}
                    <DashSetup />
                </Layout>
            </div>
        );
    }
}
