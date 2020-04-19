import ProfilePicture from './ProfilePicture';
import TextBox from './TextBox';
import { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GlobalContext } from "./GlobalContext";


class VolunteerProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            summary: "Please put a summary about yourself or your organization right here."
        };
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
    }

    handleSummaryChange (newSummary) {
        this.setState({summary: newSummary});
    }

    render(){
        return (
            <Container>
                <GridList rows={2}>
                    {/* <Grid container direction="column" spacing={3} justify="left"> */}
                    <GridListTile justify="left" style={{height: '100%'}}>
                        <Grid item xs='6'>
                            <h1>Profile</h1>
                            <Paper style={{margin: '5%'}}>
                                <ProfilePicture 
                                    editing={this.state.editing}
                                    height='100%'
                                    width='100%'
                                />
                                <span>{GlobalContext.username}</span>
                            </Paper>
                        </Grid>
                        <Grid item xs='1'>
                            <button 
                                onClick={() => {
                                    this.setState({ editing: !this.state.editing})
                                }}
                            > 
                                Edit 
                            </button>
                        </Grid>
                    </GridListTile>

                    {/* <Grid container direction="row" spacing={3} justify="right"> */}
                    <GridListTile justify="left" width='100%'>
                            <Paper style={{height: '50%'}} style={{padding: '5%'}}>
                                <span>Summary: </span>
                                <TextBox 
                                    // className="summaryBox"
                                    editing={this.state.editing} 
                                    theText={this.state.summary}
                                    handleTextChange={this.handleSummaryChange} 
                                />
                            </Paper>
                    </GridListTile>
                </GridList>
            </Container>
        );
    }
}

export default VolunteerProfile;