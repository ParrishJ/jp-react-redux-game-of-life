import React from 'react'
import Grid from './Grid'
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'



const Board = (props) => {
    
    return (
        <Container className="board border">
           <Grid />
        </Container>
    )
}


export default Board