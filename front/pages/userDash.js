
import React from "react";
import Layout from "../components/TheLayout";
import Calendar from "../components/Calendar";

export default class UserDash extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#D3D3D3'}}>
                <Layout>
                    <Calendar/>
                </Layout>
            </div>
        );
    }
}
