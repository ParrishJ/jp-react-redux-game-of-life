import React, { useState, useEffect } from 'react'

import GridColorRadios from './GridColorRadios'
import PrimaryControls from './PrimaryControls'
import ModalButtons from './ModalButtons'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, toggleShowGolModal, toggleShowMeModal  } from '../actions/cellActions'

//Destructured props instead of just passing props here
const ControlPanel = ({advanceGeneration, toggleDisableCells, clearCells, generations, randomizeCells, gridColor, generationActivity, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, stopButton, buttonsWhileRunning, toggleShowGolModal, toggleShowMeModal }) => {
    
    // In order have the range slider speed the animation up as the slider moves to the right, I have to subtract the rangeValue from the maxRangeValue. 
    // I'm setting a max range value here so that I only need to adjust it in one place in the future.
    const maxRangeValue = 2000

    // The initialState of rangeValue is maxRangeValue / 2 so that the range slider control starts in the middle of the range slider
    // I then set the value of the range slider to rangeValue to make the slider a controlled input
    const [rangeValue, setRangeValue] = useState(maxRangeValue / 2);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);  
    }
   
    // useEffect uses setInterval to trigger the advanceGeneration function based on the rangeValue state.
    // This useEffect function is also responsible for triggering the toggleDisableCells function to toggle the cellsEnabled state of the cells so 
    // that the cells cannot be clicked on while the function is running
    useEffect(() => {
        let generationIntervalId;
       
        if(generationActivity){
            advanceGeneration();
            toggleDisableCells(false);
            generationIntervalId = setInterval(advanceGeneration, (maxRangeValue - rangeValue));
            }
            
        return() => {clearInterval(generationIntervalId); toggleDisableCells(true)}
    }, [generationActivity, rangeValue, advanceGeneration, toggleDisableCells, gridColor])

    
    
    return (
        <>
        {/* <CustomStyles /> */}
        {/* Control panel and and title component */}
        <Container className="controlPanel d-flex flex-column h-100" fluid>
            
            
            <Col xs={12} className="d-flex flex-column align-items-center">
                
                <div className="d-none d-lg-block align-self-start">
                    <h1 id="controlPanelSiteTitle" style={{color: 'white', fontSize: '4vw'}}>Conway<span className="titleApostrophe">'</span>s <br />Game of Life</h1>
                </div>
            
                <div className="align-self-lg-start mt-3 mb-2 my-lg-4">
                    <h1 style={{color: 'white' }} id="generationsText">Generations: <span className="generationsNumber">{generations}</span></h1>
                </div>

                <Col className="d-none d-lg-flex" id="lgPrimaryControls">
                    <PrimaryControls id="lgPrimaryControls"/>
                </Col>
                
                <div className="mb-2 mt-lg-4 w-75">
                    <label className="text-center w-100 adjustText" for="gameSpeedRangeControl">Adujst Speed of Game</label>
                    <input className="text-center w-100 form-control-range" type="range" min="0" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange} id="gameSpeedRangeControl"></input>
                </div>

                <GridColorRadios className="mb-2"/>

                <Col className="d-lg-none d-xl-block w-100">
                    <ModalButtons />
                </Col>
            </Col>
        </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        generations: state.generations,
        gridColor: state.gridColor,
        generationActivity: state.generationActivity,
        stopButton: state.stopButton,
        buttonsWhileRunning: state.buttonsWhileRunning,
    }
}

export default connect(mapStateToProps, { advanceGeneration, clearCells, randomizeCells, toggleDisableCells, toggleGenerationActivity, toggleButtonsWhileRunning, toggleStopButton, toggleShowGolModal, toggleShowMeModal })(ControlPanel)