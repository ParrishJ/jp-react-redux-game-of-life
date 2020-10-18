import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells } from '../actions/cellActions'


const ControlPanel = ({advanceGeneration, toggleDisableCells, clearCells, generations, randomizeCells }) => {
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
            advanceGeneration();
            toggleDisableCells(false);
            generationIntervalId = setInterval(advanceGeneration, (maxRangeValue - rangeValue));
            }
            
        return() => {clearInterval(generationIntervalId); toggleDisableCells(true)}
    }, [generationActivity, rangeValue, advanceGeneration,toggleDisableCells])

    
    
    return (
        <Container>
            <Row>
                
                <Col>

                    {/* Why do we need parents in onClicks?????????????????????????????????????????????????????? */}
                    <Button onClick={() => { advanceGeneration()}} disabled={buttonsWhileRunning}>Advance Generation</Button>
                </Col>
                
                <Col>
                    <Button onClick={() => {setGenerationActivity(true); setButtonsWhileRunning(true); setStopButton(false)}} disabled={buttonsWhileRunning}>Start Game</Button>
                </Col>
               
                <Col>
                    <Button onClick={() => {setGenerationActivity(false); setButtonsWhileRunning(false); setStopButton(true)}} disabled={stopButton}>Stop Game</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {clearCells()}} disabled={buttonsWhileRunning}>Clear</Button>
                </Col>
                <Col>
                    <Button onClick={(e) => {randomizeCells()}} disabled={buttonsWhileRunning}>Randomize</Button>
                </Col>
                <Col><h1>{generations}</h1></Col>
           </Row>
           <Row className="justify-content-center">
                <input className="w-50" type="range" min="0" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange}></input>
           </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        generations: state.generations,
    }
}
export default connect(mapStateToProps, { advanceGeneration, clearCells, randomizeCells, toggleDisableCells })(ControlPanel)