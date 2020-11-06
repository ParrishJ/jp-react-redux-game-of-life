import React from 'react'


import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './ControlPanel.scss'

import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, toggleShowGolModal, toggleShowMeModal  } from '../actions/cellActions'

//Destructured props instead of just passing props here
const PrimaryControls = ({advanceGeneration, clearCells, randomizeCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, stopButton, buttonsWhileRunning }) => {
    
   
    
    // useEffect uses setInterval to trigger the advanceGeneration function based on the rangeValue state.
    // This useEffect function is also responsible for triggering the toggleDisableCells function to toggle the cellsEnabled state of the cells so 
    // that the cells cannot be clicked on while the function is running
    /* useEffect(() => {
        let generationIntervalId;
       
        if(generationActivity){
            advanceGeneration();
            toggleDisableCells(false);
            generationIntervalId = setInterval(advanceGeneration, (maxRangeValue - rangeValue));
            }
            
        return() => {clearInterval(generationIntervalId); toggleDisableCells(true)}
    }, [generationActivity, rangeValue, advanceGeneration, toggleDisableCells, gridColor]) */

    
    
    return (
        <>
            <ButtonGroup className="w-100" vertical>
                    <Button variant="outline-primary" onClick={() => {toggleGenerationActivity(true); toggleButtonsWhileRunning(true); toggleStopButton(false)}} disabled={buttonsWhileRunning}>Start Game</Button>
                    <Button variant="outline-secondary" onClick={(e) => {randomizeCells()}} disabled={buttonsWhileRunning}>Randomize</Button>
                    <Button variant="outline-secondary" onClick={() => { advanceGeneration()}} disabled={buttonsWhileRunning}>Advance Generation</Button>
                    <Button variant="outline-light" onClick={() => {toggleGenerationActivity(false); toggleButtonsWhileRunning(false); toggleStopButton(true)}} disabled={stopButton}>Stop Game</Button>
                    <Button variant="outline-light" onClick={(e) => {clearCells()}} disabled={buttonsWhileRunning}>Clear</Button>
            </ButtonGroup>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        
        generationActivity: state.generationActivity,
        stopButton: state.stopButton,
        buttonsWhileRunning: state.buttonsWhileRunning,
    }
}

export default connect(mapStateToProps, { advanceGeneration, clearCells, randomizeCells, toggleDisableCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, toggleShowGolModal, toggleShowMeModal })(PrimaryControls)