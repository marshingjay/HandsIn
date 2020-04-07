import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GridCard(props) {
    return (
        <Card border="dark" style={{ width: '10rem' }, {height: '40rem'}}>
        <Card.Img width="25%" top height = "50%" src={props.imgSrc} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.bio}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="light">
            <small className="text-muted">{props.footerText}</small>
            </Button>
      
    </Card.Footer>
        </Card>
        
    )
}

export default GridCard;
