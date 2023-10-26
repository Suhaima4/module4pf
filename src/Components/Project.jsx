import React from 'react';
import{ Col,Card,Button,Row,}from 'react-bootstrap';


function project() {
  return (
    <div className="project"> 
      <Row>
    <Col>
    <Card >
  <Card.Img variant="top" src=" https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg "  />
  <Card.Body>


    <Card.Text>
  
      <h3> my previous project work </h3>
      <Button bg-black >
      <a href=" https://suhaima4.github.io/module3/">click here</a>

      </Button>
    </Card.Text>
   
  </Card.Body>
</Card>
</Col>
</Row>
  </div>    
    
  )
}

export default project