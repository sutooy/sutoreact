import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../pages/suto.css"


const CardSuto = () => {
return (
<div className="konten">
    <Container>
        <Row>
            <Col className='konten'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                    src="https://i.etsystatic.com/10280753/r/il/d9cd72/2668809132/il_570xN.2668809132_pg8j.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
            </Card>

            </Col>
            <Col className='konten'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                    src="https://media-exp1.licdn.com/dms/image/C5103AQFu_cpQn6CeIg/profile-displayphoto-shrink_800_800/0/1551016937364?e=1631750400&v=beta&t=or60UitH106huaZWAdT_qX9uuRS0ktt_E3VZn7vEs5c" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className='konten'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmk81LkBJGbgbiHkWXys81rOkhupRppZouRF4OA1qRfZZ1twQXLUj0ZOgwITB3Gr7mMU&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>

</div>
);
};


export default CardSuto;