import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { toggleAlive, advanceGeneration, clearCells, randomizeCells } from '../actions/cellActions'


const Grid = (props) => {
     const [generationActivity, setGenerationActivity] = useState(false)
   
    useEffect(() => {
        let generationIntervalId;

        if(generationActivity){
            props.advanceGeneration();
            generationIntervalId = setInterval(props.advanceGeneration, 1000);
            }
            
        return() => clearInterval(generationIntervalId)
    }, [generationActivity])
    
    return (
        <div>
            <Row>
                
                <Col>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        props.advanceGeneration();
                    }}>Advance Generation</Button>
                </Col>
                
                <Col>
                    <Button onClick={(e) => {setGenerationActivity(true)}}>Start Game</Button>
                </Col>
               
                <Col>
                    <Button onClick={(e) => {setGenerationActivity(false)}}>Stop Game</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {props.clearCells()}}>Clear</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {props.randomizeCells()}}>Randomize</Button>
                </Col>
                <Col><h1>{props.generations}</h1></Col>
           </Row>
           {props.cells.map(row => {
               return (
                   <Row noGutters={true}>
                       {row.map(cell => {
                           {if(cell.alive == true){
                            return (
                            
                                <Col className="border cell" style={{height: '2vw', backgroundColor: 'rebeccapurple'}} 
                                /* onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.cellId)
                                }} */
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.rowId, cell.colId)
                                }}
                                ></Col>
                                )
                            }
                        else {
                            return (
                            
                                <Col className="border cell" style={{height: '2vw'}} 
                                /* onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.cellId)
                                }} */
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.toggleAlive(cell.rowId, cell.colId)
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
        generations: state.generations,
    }
}
export default connect(mapStateToProps, { toggleAlive, advanceGeneration, clearCells, randomizeCells })(Grid)