import Layout from '../components/TheLayout';
import MediaCard from '../components/AboutUsCard';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ComplexGrid from '../components/GridCard'
import TestAPI from '../components/Test'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary
    }
  }));

export default function Creators() {
    const classes = useStyles();
    return (
        <Layout>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" style={{marginLeft: '25px', marginRight: '25px'}} textalign = "center">
          Welcome to HandsIn! We are a group of students at the University of
            Kansas that wanted to create an application to simplify the
            volunteering process.
                    </Typography>
           
        </Grid>
        </Grid>
        <span>&nbsp;&nbsp;</span> 
        <ComplexGrid title = "Clare Meyer" children="Clare is a senior at KU with a passion for front end development.
            After graduation, she plans to work for Capital One in New York
            City." image="/static/clare.jpeg" link="Github"/>
        {/* <ComplexGrid title = "Surabhi Khachar" children="Surabhi is a senior studying computer science and economics. She will be working
        at C2FO prior to graduating. She is a lover of running and her puppy beagle!" image="/static/surabhi.jpeg" link="Github"/>
        <testAPI></testAPI> */}
        <div></div>
        <TestAPI></TestAPI>
        </Layout>
        
    );
}

