import React from "react";
import FullCalendar from "rc-calendar";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel, FormControl } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const moment = require("moment");

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.sideBar = this.sideBar.bind(this);

        this.state = {
            events: [],
            showEvents: ["this"],
            calApiLoaded: false,
            clientId:
                "60291392559-qspqkpli4v31ll0a68lc7sd59hm89n8m.apps.googleusercontent.com",
            eventColors: {},
            calColors: {},
            calIds: {},
            selectedDay: new moment(),
            cals: [],
        };
    }

    changeDate(value) {
        this.setState({ selectedDay: value, showEvents: [] }, () => {
            this.getEventsFromSelection();
        });
    }

    getEventsFromSelection() {
        var holdList = [];
        this.state.events.map((event) => {
            var sDay = this.state.selectedDay.format().substring(0, 10);
            var start = event.start.substring(0, 10);
            if (event.end == undefined) {
                if (sDay == start) {
                    holdList.push(event);
                }
            } else {
                var end = event.end.substring(0, 10);
                if (sDay >= start && sDay <= end) {
                    holdList.push(event);
                }
            }
        });
        this.setState({ showEvents: holdList });
    }

    componentDidMount() {
        this.loadGoogleSDK();
    }

    // Load the SDK asynchronously
    loadGoogleSDK = () => {
        (function (d, s, id) {
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
                this.state.eventColors[event.colorId] || this.state.calColors[calId],
        };
    }

    onChange(e) {
        const calId = event.target.getAttribute("id");
        let eventList = this.state.events.slice(0);
        if (event.target.checked) {
            // Add events from this calendar
            // calIds[calId] = true;
            gapi.client.calendar.events
                .list({
                    calendarId: calId,
                })
                .then((resp) => {
                    const events = resp.result.items;
                    for (let i = 0; i < events.length; ++i) {
                        eventList.push(this.getEventProps(events[i], calId));
                    }
                    this.setState({
                        events: eventList,
                        // calIds: calIds
                    });
                });
        } else {
            // Remove events from this calendar
            eventList = this.state.events.filter((x) => x.calendarId !== calId);
            // calIds[calId] = false;
            this.setState({
                events: eventList,
                // calIds: calIds
            });
        }
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
                    immediate: false,
                })
                .then((authResult) => {
                    // Load the calendar API
                    if (authResult) {
                        return gapi.client.load("calendar", "v3");
                    }
                })
                .then(() => {
                    //set the state the calendar has been loaded
                    this.setState({
                        calApiLoaded: true,
                    });
                    //make the open google calendars button go away
                    // btn.style.display = "none";
                    // Load calendar colors
                    return gapi.client.calendar.colors.get({
                        fields: "event",
                    });
                })
                .then((resp) => {
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
                            "items(backgroundColor,colorId,description,id,summary)",
                    });
                })
                .then((resp) => {
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
                            description: cals[i].description || "No description",
                        };

                        this.setState({
                            cals: this.state.cals.concat(newItem),
                        });
                    }

                    this.setState({
                        calColors: calColors,
                    });
                })
                .catch((err) => {
                    // TODO test for more errors
                    // mobiscroll.toast({,
                    //     message: err.error
                    // });
                });
        }
    }

    sideBar() {
        var eventListItems = this.state.showEvents.map((event, index) => (
            <ListItem key={event.text + event.calendarId}>
                <ListItemText primary={event.text} secondary={event.calendarId} />
            </ListItem>
        ));
        return <List>{eventListItems}</List>;
    }

    render() {
        const theItems = this.state.cals.map((cal, index) => (
            <FormControlLabel
                key={cal.id}
                control={
                    <Switch
                        id={cal.id}
                        onChange={(e) => this.onChange(e)}
                        label={cal.label}
                    />
                }
                label={cal.summary}
            />
        ));

        return (
            <div>
                {/* <Container width='100%' justfiyContent='stretch'> */}
                <Button
                    variant="contained"
                    onClick={(e) => this.auth(e)}
                    disabled={this.state.calApiLoaded}
                    width="100%"
                >
                    Open Google Calendars
                </Button>
                <div>{theItems}</div>
                <FullCalendar
                    data={this.state.events}
                    style={{
                        margin: 10,
                        width: "100%",
                        height: "100%",
                    }}
                    value={this.state.selectedDay}
                    onSelect={(onSelect) => {
                        this.changeDate(onSelect);
                    }}
                    renderFooter={this.sideBar}
                />
                {/* </Container> */}
                {/* <div className="mbsc-grid"> */}
                {/* <Grid container spacing={2} direction="column"> */}
                {/* <Grid item xs={12}> */}

                {/* </Grid> */}
                {/* </Grid> */}
            </div>
        );
    }
}
