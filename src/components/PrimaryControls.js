import React from 'react'
import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, toggleShowGolModal, toggleShowMeModal  } from '../actions/cellActions'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const PrimaryControls = ({advanceGeneration, clearCells, randomizeCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, stopButton, buttonsWhileRunning }) => {
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