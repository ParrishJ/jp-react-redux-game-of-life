import React, { useState, useEffect } from 'react'
import GenerationRange from './GenerationRange'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { toggleAlive, advanceGeneration, clearCells, randomizeCells } from '../actions/cellActions'


const Grid = (props) => {
    const [generationActivity, setGenerationActivity] = useState(false);

    //In order have the range slider speed the animation up as we move the slider to the left, we have to subtract the range from the max 
    //value. I'm setting a max range value here so that I only need to adjust it in one place in the future.
    const maxRangeValue = 2000

    const [rangeValue, setRangeValue] = useState(maxRangeValue / 2);

    

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
        console.log(rangeValue)
    }
   
    useEffect(() => {
        let generationIntervalId;
        //clearInterval(generationIntervalId)

        if(generationActivity){
            props.advanceGeneration();
            generationIntervalId = setInterval(props.advanceGeneration, (maxRangeValue - rangeValue));
            }
            
        return() => clearInterval(generationIntervalId)
    }, [generationActivity, rangeValue])

    
    
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
           <Row className="justify-content-center">
                <input className="w-50" type="range" min="0" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange}></input>
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