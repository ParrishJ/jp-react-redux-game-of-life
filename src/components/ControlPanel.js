import React, { useState, useEffect } from 'react'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells } from '../actions/cellActions'


const ControlPanel = (props) => {
    const [generationActivity, setGenerationActivity] = useState(false);


    // In order have the range slider speed the animation up as we move the slider to the left, we have to subtract the range from the max 
    // value. I'm setting a max range value here so that I only need to adjust it in one place in the future.
    const maxRangeValue = 2000

    const [rangeValue, setRangeValue] = useState(maxRangeValue / 2);

    const [buttonsWhileRunning, setButtonsWhileRunning] = useState(false)

    const [stopButton, setStopButton] = useState(true)

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
        
    }
   
    useEffect(() => {
        let generationIntervalId;
       
        if(generationActivity){
            props.advanceGeneration();
            props.toggleDisableCells(false);
            generationIntervalId = setInterval(props.advanceGeneration, (maxRangeValue - rangeValue));
            }
            
        return() => {clearInterval(generationIntervalId); props.toggleDisableCells(true)}
    }, [generationActivity, rangeValue])

    
    
    return (
        <div>
            <Row>
                
                <Col>

                    {/* Why do we need parents in onClicks?????????????????????????????????????????????????????? */}
                    <Button onClick={() => { props.advanceGeneration()}} disabled={buttonsWhileRunning}>Advance Generation</Button>
                </Col>
                
                <Col>
                    <Button onClick={() => {setGenerationActivity(true); setButtonsWhileRunning(true); setStopButton(false)}} disabled={buttonsWhileRunning}>Start Game</Button>
                </Col>
               
                <Col>
                    <Button onClick={() => {setGenerationActivity(false); setButtonsWhileRunning(false); setStopButton(true)}} disabled={stopButton}>Stop Game</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {props.clearCells()}} disabled={buttonsWhileRunning}>Clear</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {props.randomizeCells()}} disabled={buttonsWhileRunning}>Randomize</Button>
                </Col>
                <Col><h1>{props.generations}</h1></Col>
           </Row>
           <Row className="justify-content-center">
                <input className="w-50" type="range" min="0" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange}></input>
           </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        generations: state.generations,
    }
}
export default connect(mapStateToProps, { advanceGeneration, clearCells, randomizeCells, toggleDisableCells })(ControlPanel)