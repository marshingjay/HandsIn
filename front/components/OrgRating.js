import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StarsIcon from "@material-ui/icons/Stars";
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(64),
          height: theme.spacing(32),
        },
      }
}));

function OrgRating() {
    const classes = useStyles();
     
    //placeholder values
    let organizationName = "Organization";
    
    //must be integers
    let overallRating = 0; 
    let oneStarVotes = 0;
    let twoStarVotes = 0;
    let threeStarVotes = 0;
    let fourStarVotes = 0;
    let fiveStarVotes = 0;

    return (
        <div className={classes.root}>
            <Paper style={{backgroundColor: 'transparent'}}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <StarsIcon/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="h5" gutterBottom>
                            {organizationName} Rating
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom style={{marginLeft: '220px', marginBottom: '-15px', marginTop: '40px'}}>
                            {overallRating}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Rating disabled="true" precision={1} value={overallRating} style={{marginLeft: '180px'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom style={{marginLeft: '155px'}}>
                            Average Rating
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper style={{backgroundColor: 'transparent'}}>   
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Rating disabled="true" precision={1} value={5} style={{marginTop: '20px'}}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" gutterBottom style={{marginTop: '17px'}}>
                            {fiveStarVotes} vote(s)
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Rating disabled="true" precision={1} value={4}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" gutterBottom>
                            {fourStarVotes} vote(s)
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Rating disabled="true" precision={1} value={3}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" gutterBottom>
                            {threeStarVotes} vote(s)
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Rating disabled="true" precision={1} value={2}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" gutterBottom>
                            {twoStarVotes} vote(s)
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Rating disabled="true" precision={1} value={1}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" gutterBottom>
                            {oneStarVotes} vote(s)
                        </Typography>
                    </Grid>
                </Grid>
            </Paper> 
        </div>
    )
}

export default OrgRating;