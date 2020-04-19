import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Calendar from "../components/Calendar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StarsIcon from "@material-ui/icons/Stars";
import SettingsIcon from "@material-ui/icons/Settings";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Container from "@material-ui/core/Container";
import VolunteerProfile from "./VolunteerProfile";
import OrgRating from "./OrgRating";
import AddEvent from "./AddEvent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
    },
    gridItemCal: {
        width: '75%',
        padding: theme.spacing(1)
    }
}));

function GetComp(props) {
    if(props.num == 0){
        return <Calendar />;
    } else if(props.num == 1){
        return <VolunteerProfile rating={2}/>
    } else if(props.num == 2){
        return <AddEvent/>
    } else if(props.num == 3){
        return <OrgRating/>
    } else {
        return <SettingsIcon/>
    }
}

function DashSetup(props) {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

    };

    return (
        <div className={classes.root}>
            {/* <Container maxWidth="xl"> */}
                <Grid container direction='row'>
                <Grid item style={{backgroundColor: '#F1F1F1', width: '75%', padding: '2%', height: '85vh'}}>
                    <GetComp num={selectedIndex} />
                </Grid>
                    <Grid item sm={3} alignContent="right">
                        <Paper elevation={3} style={{margin: '8%'}}>
                            <List component="nav">
                                <ListItem
                                    button
                                    selected={selectedIndex === 0}
                                    onClick={(e) => handleListItemClick(e, 0)}
                                >
                                    <ListItemIcon>
                                        <CalendarTodayIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Calendar" />
                                </ListItem>
                                <ListItem
                                    button
                                    selected={selectedIndex === 1}
                                    onClick={(e) => handleListItemClick(e, 1)}
                                >
                                    <ListItemIcon>
                                        <SupervisedUserCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItem>
                                <ListItem
                                    button
                                    selected={selectedIndex === 2}
                                    onClick={(e) => handleListItemClick(e, 2)}
                                >
                                    <ListItemIcon>
                                        <AddCircleOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Event" />
                                </ListItem>
                                <ListItem
                                    button
                                    selected={selectedIndex === 3}
                                    onClick={(e) => handleListItemClick(e, 3)}
                                >
                                    <ListItemIcon>
                                        <StarsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Ratings" />
                                </ListItem>
                                <ListItem
                                    button
                                    selected={selectedIndex === 4}
                                    onClick={(e) => handleListItemClick(e, 4)}
                                >
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItem>
                            </List>

                        </Paper>
                    </Grid>
                </Grid>
            {/* </Container> */}
        </div>
    );
}

export default DashSetup;
