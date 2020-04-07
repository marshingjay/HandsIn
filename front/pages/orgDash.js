import React from "react";
import Layout from "../components/TheLayout";
import Calendar from "../components/Calendar";

export default class OrgDash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout>
                    <Calendar />
                </Layout>
            </div>
        );
    }
}
