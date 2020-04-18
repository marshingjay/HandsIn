import ProfilePicture from './ProfilePicture';
import TextBox from './TextBox';
import { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class VolunteerProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            summary: ""
        };
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
    }

    handleSummaryChange (newSummary) {
        this.setState({summary: newSummary});
    }

    render(){
        return (
            <div>
                <Grid container direction="column" justify="left">
                    <Grid item sm='12'>
                        <Paper>
                            <ProfilePicture 
                                editing={this.state.editing}
                                height='20%'
                                width='20%'
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm='12'>
                        <Paper>
                            <TextBox 
                                className="summaryBox"
                                editing={this.state.editing} 
                                theText={this.state.summary}
                                handleTextChange={this.handleSummaryChange} 
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm='12'>
                        <Paper>
                            <button 
                                onClick={() => {
                                    this.setState({ editing: !this.state.editing})
                                }}
                            > 
                                Edit 
                            </button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default VolunteerProfile;