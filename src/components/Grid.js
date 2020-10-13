import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { toggleAlive, advanceGeneration } from '../actions/cellActions'


const Grid = (props) => {
    
    return (
        <div>
            <div>
                <Button onClick={(e) => {
                    e.preventDefault();
                    props.advanceGeneration();
                }}>Advance Generation</Button>
           </div>
           {props.cells.map(row => {
               return (
                   <Row noGutters={true}>
                       {row.map(cell => {
                           {if(cell.alive == true){
                            return (
                            
                                <Col className="border cell" style={{height: '2vw', backgroundColor: 'rebeccapurple'}} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.cellId)
                                }}
                                ></Col>
                                )
                            }
                        else {
                            return (
                            
                                <Col className="border cell" style={{height: '2vw'}} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.cellId)
                                }}
                            ></Col>
                                )
                        }}
                          /*  return (
                            
                           <Col className="border cell" style={{height: '10vw'}} 
                           onClick={(e) => {
                               e.preventDefault();
                               props.toggleAlive(cell.cellId)
                           }}
                           >{cell.cellId}</Col>
                           ) */
                       })}
                   </Row>
               )
           })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cells: state.cells,
    }
}
export default connect(mapStateToProps, { toggleAlive, advanceGeneration })(Grid)