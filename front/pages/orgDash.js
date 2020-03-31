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

import mobiscroll from "@mobiscroll/react-lite";
import React from "react";
import FullCalendar from "rc-calendar";
import Layout from "../components/TheLayout";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel, FormControl } from "@material-ui/core";
import { Card } from "@material-ui/core";

const moment = require("moment");

function onSelect(value) {
    // this.setState({
    //     selectedDay: value
    //     // startDate: this.state.selectedDay.setHours(0, 0, 0),
    //     // endDate: this.state.selectedDay.setHours(23, 59, 59)
    // });
    // console.log(this.state.stateDate);
    console.log("select", "going to do something better");
}

export default class OrgDash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            showEvents: [],
            calApiLoaded: false,
            clientId:
                "60291392559-qspqkpli4v31ll0a68lc7sd59hm89n8m.apps.googleusercontent.com",
            eventColors: {},
            calColors: {},
            calIds: {},
            selectedDay: new moment(),
            cals: []
        };
    }

    changeDate(value) {
        console.log("vale");
        this.setState({ selectedDay: value, showEvents: [] }, () => {
            this.getEventsFromSelection();
        });
    }

    getEventsFromSelection() {
        var holdList = [];
        this.state.events.map(event => {
            if (
                this.state.selectedDay.format().substring(0, 10) >=
                    event.start.substring(0, 10) &&
                this.state.selectedDay.format().substring(0, 10) <=
                    event.end.substring(0, 10)
            ) {
                holdList.push(event);
            }
        });
        this.setState({ showEvents: holdList });
        console.log(holdList);
    }

    componentDidMount() {
        this.loadGoogleSDK();
    }

    // Load the SDK asynchronously
    loadGoogleSDK = () => {
        (function(d, s, id) {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                this.onGoogleLoad();
                return;
            }
            const js = d.createElement(s);
            js.id = id;
            js.src = "//apis.google.com/js/client.js?onload=onGoogleLoad";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "google-jssdk");
    };

    onGoogleLoad() {
        gapi.auth.init(() => {});
    }

    getEventProps(event, calId) {
        return {
            start: event.start.date || event.start.dateTime,
            end:
                ((new Date(event.end.date) - new Date(event.start.date)) /
                    86400000 ==
                1
                    ? ""
                    : event.end.date) || event.end.dateTime,
            text: event.summary || "No Title",
            calendarId: calId,
            color:
                this.state.eventColors[event.colorId] ||
                this.state.calColors[calId]
        };
    }

    // onPageLoading = (event, inst) => {
    //     const state = this.state;
    //     const year = event.firstDay.getFullYear();
    //     const month = event.firstDay.getMonth();

    //     this.setState({
    //         firstDay: new Date(year, month - 1, -7),
    //         lastDay: new Date(year, month + 2, 14)
    //     });

    //     if (state.calApiLoaded) {
    //         let batch = gapi.client.newBatch();
    //         for (let calId in state.calIds) {
    //             batch.add(
    //                 gapi.client.calendar.events.list({
    //                     calendarId: calId,
    //                     timeMin: firstDay.toISOString(),
    //                     timeMax: lastDay.toISOString()
    //                 }),
    //                 { id: calId }
    //             );
    //         }
    //         if (state.calIds) {
    //             batch.then(res => {
    //                 let eventList = [];
    //                 for (let r in res) {
    //                     let events = res[r].result.items;
    //                     for (let i = 0; i < events.length; ++i) {
    //                         eventList.push(this.getEventProps(events[i], r));
    //                     }
    //                 }
    //                 this.setState({
    //                     events: eventList
    //                 });
    //             });
    //         }
    //     }
    // };

    onChange(e) {
        // this.setState({ selectedDay: e });
        // console.log(e.target.getAttribute("id"));
        const calId = event.target.getAttribute("id");
        let eventList = this.state.events.slice(0);
        // const calIds = Object.assign({}, this.state.calIds);
        // console.log(this.state.selectedDay.startOf("day").toISOString());
        // console.log(this.state.selectedDay.endOf("day"));
        if (event.target.checked) {
            // Add events from this calendar
            // calIds[calId] = true;
            gapi.client.calendar.events
                .list({
                    calendarId: calId
                    // timeMin: this.state.selectedDay
                    //     .startOf("day")
                    //     .toISOString(),
                    // timeMax: this.state.selectedDay.endOf("day").toISOString()
                })
                .then(resp => {
                    const events = resp.result.items;
                    for (let i = 0; i < events.length; ++i) {
                        eventList.push(this.getEventProps(events[i], calId));
                        // console.log("THIS", events[i].start.dateTime);
                    }
                    this.setState({
                        events: eventList
                        // calIds: calIds
                    });
                });
        } else {
            // Remove events from this calendar
            eventList = this.state.events.filter(x => x.calendarId !== calId);
            // calIds[calId] = false;
            this.setState({
                events: eventList
                // calIds: calIds
            });
        }
        // console.log(this.state.events);
    }

    auth(ev) {
        const state = this.state;
        const btn = ev.target;
        // Google auth
        if (!state.calApiLoaded) {
            gapi.auth
                .authorize({
                    client_id: state.clientId,
                    scope: "https://www.googleapis.com/auth/calendar",
                    immediate: false
                })
                .then(authResult => {
                    // Load the calendar API
                    if (authResult) {
                        return gapi.client.load("calendar", "v3");
                    }
                })
                .then(() => {
                    //set the state the calendar has been loaded
                    this.setState({
                        calApiLoaded: true
                    });
                    //make the open google calendars button go away
                    // btn.style.display = "none";
                    // Load calendar colors
                    return gapi.client.calendar.colors.get({
                        fields: "event"
                    });
                })
                .then(resp => {
                    // const ev = resp.result.event;
                    // const eventColors = Object.assign(
                    //     {},
                    //     this.state.eventColors
                    // );
                    // for (let i = 0; i < ev.length; ++i) {
                    //     eventColors[i] = ev[i].color.background;
                    //     this.setState({
                    //         eventColors: eventColors
                    //     });
                    // }
                    // Load calendar list
                    return gapi.client.calendar.calendarList.list({
                        fields:
                            "items(backgroundColor,colorId,description,id,summary)"
                    });
                })
                .then(resp => {
                    // Populate list of calendars
                    const cals = resp.result.items;
                    const calColors = Object.assign({}, this.state.calColors);

                    //for each calendar, set colors, descriptions, values and state
                    for (let i = 0; i < cals.length; ++i) {
                        calColors[cals[i].id] = cals[i].backgroundColor;

                        const newItem = {
                            id: cals[i].id,
                            val: false,
                            summary: cals[i].summary,
                            description: cals[i].description || "No description"
                        };

                        this.setState({
                            cals: this.state.cals.concat(newItem)
                        });
                    }

                    this.setState({
                        calColors: calColors
                    });
                })
                .catch(err => {
                    // TODO test for more errors
                    // mobiscroll.toast({,
                    //     message: err.error
                    // });
                });
        }
    }

    render() {
        const theItems = this.state.cals.map((cal, index) => (
            <FormControlLabel
                key={cal.id}
                control={
                    <Switch
                        id={cal.id}
                        // onChange={this.onChange.bind(this, index)}
                        onChange={e => this.onChange(e)}
                        label={cal.label}
                    />
                }
                label={cal.summary}
            />
        ));

        return (
            <div>
                <Layout>
                    <FormControl ref="form" theme="ios">
                        <div className="mbsc-grid">
                            <div className="mbsc-row">
                                <div className="mbsc-col-sm-12 mbsc-col-md-4">
                                    <FormGroup>
                                        <Button
                                            variant="contained"
                                            onClick={e => this.auth(e)}
                                            className="mbsc-btn-block"
                                            disabled={this.state.calApiLoaded}
                                        >
                                            Open Google Calendars
                                        </Button>
                                        <div>{theItems}</div>
                                    </FormGroup>
                                </div>
                                <div>
                                    {/* <View> */}
                                    <FullCalendar
                                        data={this.state.events}
                                        style={{
                                            margin: 10,
                                            width: "200%",
                                            height: "100%"
                                        }}
                                        value={this.state.selectedDay}
                                        onSelect={onSelect => {
                                            this.changeDate(onSelect);
                                        }}
                                    />
                                    {/* </View> */}
                                </div>
                            </div>
                        </div>
                    </FormControl>
                </Layout>
            </div>
        );
    }
}
