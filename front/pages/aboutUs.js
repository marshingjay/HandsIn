import Layout from '../components/TheLayout';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import GridCard from '../components/GridCard_2'
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.primary
//     }
//   }));

export default function Creators() {
    // const classes = useStyles();
    return (
        <Layout>
              <Jumbotron style={{backgroundImage: "../static/clare.jpeg"}}>
                <h1 align="center">About HandsIn</h1>
                <h6 align="center">
                <Typography variant="h6" style={{marginLeft: '25px', marginRight: '25px'}} textalign = 'center'>
                  Welcome to HandsIn! We are a group of students at the University of
                  Kansas that wanted to create an application to simplify the
                  volunteering process. Our mission is to make it easier for people and organizations to access volunteer opportunities.
                      </Typography>
                 </h6>
                </Jumbotron >
          <Grid container spacing={3}>
          <Grid item xs={12}>
            
          </Grid>
          </Grid>
          <span>&nbsp;&nbsp;</span> 
          <span>&nbsp;&nbsp;</span> 

          <CardDeck style={{maxWidth: '95%'}, {align: 'center'}}>
            <GridCard title = "Clare Meyer" imgSrc = "../static/clare.jpeg" bio = "Clare is a senior at KU with a passion for front end development. After graduation she plans to work for Capital One in New York City." 
            footerText = "Github"/>
             <GridCard title = "Surabhi Khachar" imgSrc = "../static/surabhi.jpeg" bio = "Surabhi is a senior studying computer science and economics. She will be working
             at C2FO prior to graduating. She is a lover of running and her puppy beagle!" 
             footerText = "Github"/>
            <GridCard title = "Annika Kuhnke" imgSrc = "../static/annika.jpeg" bio = "Annika is a senior at KU with hundreds of hours of volunteer experience to bring to this project. After graduating with a BS in Computer Science, she plans to get her MS at KU as well." 
          footerText = "Github"/>
          {/* </CardDeck>
          <span>&nbsp;&nbsp;</span> 
          <CardDeck style={{maxWidth: '50%'}}> */}
          <GridCard title = "Jacob Marshall" imgSrc = "../static/jacob.jpeg" bio = "Jacob is a senior at KU interested in novel research and the application of software to studying financial markets. He is currently a member of KU's Padlock Security Lab and studies sensor vulnerabilities in UAVs." 
          footerText = "Github"/>
          <GridCard title = "Tanner Cronister" imgSrc = "../static/tanner.jpeg" bio = "Tanner is a senior studying computer science. He has an interest in healthcare, and will be working for Cerner upon graduation." 
          footerText = "Github"/>
          </CardDeck>
          {/* <style jsx>{`
            .card-deck .card {
              max-width: 25%;
          }
        `}</style> */}
        </Layout>
        
    );
}
