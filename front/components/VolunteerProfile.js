import ProfilePicture from './ProfilePicture';
import TextBox from './TextBox';
import { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


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
            <Container>
                <Grid containter direction="row" spacing={3}>
                    <Grid item xs='3'>
                        <Paper>
                            <h2>test</h2>
                            {/* <ProfilePicture 
                                editing={this.state.editing}
                                height='90px'
                                width='90px'
                            /> */}
                        </Paper>
                    </Grid>
                    <Grid item xs='3'>
                        <Paper>
                            <TextBox 
                                className="summaryBox"
                                editing={this.state.editing} 
                                theText={this.state.summary}
                                handleTextChange={this.handleSummaryChange} 
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs='3'>
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
            </Container>
        );
    }
}

export default VolunteerProfile;