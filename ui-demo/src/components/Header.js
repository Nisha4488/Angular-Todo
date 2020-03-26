import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import logo from '../images/logo.png'

const Header = () => {
    return(
        <Container >
        <Row >
        
        <Col xs="3"><img src={logo} style={{height:80, width:140}}/></Col>
        <Col xs="auto"><h4 style={{fontWeight: 500, fontSize:'20px', padding:'25px'}}>LINK MANAGEMENT</h4></Col>
        <Col xs="3"><h4 style={{fontWeight: 500, fontSize:'20px', padding:'25px'}}>RESOURCES</h4></Col>
      </Row>
        
        
        </Container>
    )
}

export default Header