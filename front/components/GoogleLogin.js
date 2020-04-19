// import Layout from "../components/TheLayout";

// import React from "react";
// import GoogleLogin from "react-google-login";
// import Calendar from "react-google-calendar-api";

// const responseGoogle = response => {
//     console.log(response);
// };

// export default class OrgDash extends React.Component {
//     render() {
//         return (
//             <Layout>
//                 <p>Org Dash</p>
//                 <GoogleLogin
//                     clientId="60291392559-qspqkpli4v31ll0a68lc7sd59hm89n8m.apps.googleusercontent.com"
//                     buttonText="Login"
//                     onSuccess={responseGoogle}
//                     onFailure={responseGoogle}
//                     cookiePolicy={"single_host_origin"}
//                 />
//                 {/* <Calendar
//                     events={this.state.events}
//                     config={calendar_configuration}
//                 /> */}
//                 {/* , document.getElementById("googleButton") */}
//             </Layout>
//         );
//     }
// }