import React from 'react'
import Grid from './Grid'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'



const Board = (props) => {
    
    return (
        <div className="board p-5">
           <Grid />
        </div>
    )
}


export default Board