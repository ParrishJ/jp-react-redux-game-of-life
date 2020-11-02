import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap//Image'

import sun from '../images/sun-1.svg'
import './Footer.scss'

const Footer = () => {
    
    return (
    <Container className="footerContainer" fluid>
         <Row>
            <Col xs={3} className="overflow-hidden">
                <Image src={sun} className="sun"/>
            </Col>
         </Row>
    </Container>
    )
}


export default Footer