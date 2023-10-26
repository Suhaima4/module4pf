import React from 'react';
import {Card,Container,Col,Row} from 'react-bootstrap';


function Home() {
  return (
    <Container>
      <h1>
           Welcome To My Portfolio
      </h1>
    <Row>
     <Col>
     <Card >
   <Card.Img variant="top" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph" />
   
   <Card.Body>
  
     <Card.Text>
    
     </Card.Text>
    
   </Card.Body>
</Card>
</Col>
</Row>
</Container>
  )
}

export default Home