// import Link from 'next/link';
import Layout from "../components/TheLayout";
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default function Index() {
    return (
        <Layout>
            <Jumbotron>
                <div align="center">
                    <img src="../static/animated.svg" alt="Animated HandsIn" />
                </div>
                <h2 align = "center">Find a volunteer opportunity that fits your needs with HandsIn</h2>
                </Jumbotron>
        <br />
        <CardGroup>
  <Card>
    <PermContactCalendarRoundedIcon align = "center" color="primary" style={{ fontSize: 50 }}></PermContactCalendarRoundedIcon>
    <Card.Body>
      <Card.Title>1. Setup</Card.Title>
      <Card.Text>
        Create a profile with us to get started! It's as easy as having a Google Account
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <LocalLibraryIcon align = "center" color="primary" style={{ fontSize: 50 }}></LocalLibraryIcon>
    <Card.Body>
      <Card.Title>2. Find your fit</Card.Title>
      <Card.Text>
        Search volunteer opportunites in your area from our database that fit your needs
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  <PeopleAltIcon align = "center" color="primary" style={{ fontSize: 50 }}></PeopleAltIcon>
    <Card.Body>
      <Card.Title>3. Volunteer!</Card.Title>
      <Card.Text>
        HandsIn creates an accessible, simple way to locate opportunities with reputable organizations so you can easily track your service hours. 
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </Layout>
        
    );
}
