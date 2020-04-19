import ProfilePicture from './ProfilePicture';
import TextBox from './TextBox';
import { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GlobalContext } from "./GlobalContext";
import StarRatings from 'react-star-ratings';

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
                    {/* holds the left side stuff */}
                    <GridListTile justify="left" style={{height: '100%'}}>
                        {/* the word profile and the editable profile picture and the username */}
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
                        {/* holds the edit button */}
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
                    
                    {/* holds the right side stuff */}
                    <GridListTile justifyContent='flex-start' style={{height: '100%'}}>
                            {/* number of stars */}
                            <StarRatings
                                // rating={this.state.rating}
                                rating={this.props.rating}
                                starRatedColor="black"
                                // changeRating={this.changeRating}
                                numberOfStars={6}
                                name='rating'
                            />
                            {/* need to make function to deduce the number of stars, going to default to five for now */}
                            {/* summary */}
                            <Paper style={{height: '50%'}} style={{padding: '5%', margin: '5%'}}>
                                <span>Summary: </span>
                                <TextBox 
                                    className="summaryBox"
                                    editing={this.state.editing} 
                                    theText={this.state.summary}
                                    handleTextChange={this.handleSummaryChange} 
                                />
                            </Paper>
                            {/* ratings */}
                            <Paper style={{height: '50%'}} style={{padding: '5%', margin: '5%'}}>
                                <span>list to hold the ratings, need to read these in</span>
                            </Paper>
                            
                    </GridListTile>
                </GridList>
            </Container>
        );
    }
}

export default VolunteerProfile;