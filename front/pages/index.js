// import Link from 'next/link';
import Layout from "../components/TheLayout";
import Jumbotron from 'react-bootstrap/Jumbotron';
import GridCard from '../components/GridCard'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Index() {
    return (
        <Layout>
            <Jumbotron style={{backgroundImage: "../static/clare.jpeg"}}>
                <div align="center">
                    <img src="../static/animated.svg" alt="Animated HandsIn" />
                </div>
                <h2 align = "center">Find a volunteer opportunity that fits your needs with HandsIn</h2>
                </Jumbotron >
        <br />
        <CardDeck style={{maxWidth: '95%'}, {align: 'center'}}>
            <GridCard title = "" imgSrc = "." bio = "" 
            footerText = ""/>
             <GridCard title = "" imgSrc = "." bio = "" 
            footerText = ""/>
            <GridCard title = "" imgSrc = "." bio = "" 
            footerText = ""/> </CardDeck>
        </Layout>
    );
}
