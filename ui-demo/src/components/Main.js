import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    InputGroup,
    InputGroupAddon,
    
    Input,
    Button,
    
   } from 'reactstrap';

const Main = () => {
    return(
        <Container style={{  marginTop:'230px'}}>
        
       
        <Row className="  align-items-center justify-content-center">
        <Col><h1 style={{marginLeft:'80px'}}>HARNESS EVERY CLICK, TAP AND SWIPE.</h1></Col>
      </Row>
      <Row className="  align-items-center justify-content-center" style={{marginBottom:"50px"}}>
        <Col><h4  style={{fontWeight: 250}}>Brand, track and optimize every touchpoint with Infosys, next generation link management platform.</h4></Col>
      </Row>
        
        <Row className="  align-items-center justify-content-center" >
        <Col sm="12"  md="8">
        <InputGroup >
        
        <Input placeholder="paste a link to shorten it" style={{height:50}}/>
        <InputGroupAddon addonType="append"><Button style={{height:50, backgroundColor:'orange'}}>SHORTEN</Button></InputGroupAddon>
      </InputGroup>
      </Col>
        
        
      </Row>
      
      </Container>
     
        
    )
}

export default Main