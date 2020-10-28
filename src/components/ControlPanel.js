import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import headshot from '../images/Jared-Parrish-Headshot.jpg'
import './ControlPanel.scss'

import { CustomStyles } from '../CustomStyles';

import { connect } from 'react-redux'

import { advanceGeneration, clearCells, randomizeCells, toggleDisableCells } from '../actions/cellActions'

//Destructured props instead of just passing props here
const ControlPanel = ({advanceGeneration, toggleDisableCells, clearCells, generations, randomizeCells }) => {
    const [generationActivity, setGenerationActivity] = useState(false);


    // In order have the range slider speed the animation up as the slider moves to the right, I have to subtract the rangeValue from the maxRangeValue. 
    // I'm setting a max range value here so that I only need to adjust it in one place in the future.
    const maxRangeValue = 2000

    // The initialState of rangeValue is maxRangeValue / 2 so that the range slider control starts in the middle of the range slider
    // I then set the value of the range slider to rangeValue to make the slider a controlled input
    const [rangeValue, setRangeValue] = useState(maxRangeValue / 2);

    // buttonsWhileRunning disables all buttons besides stop button while the simulation is running
    const [buttonsWhileRunning, setButtonsWhileRunning] = useState(false)

    // Disables the stop button if the siumaltion is not running
    const [stopButton, setStopButton] = useState(true)

    // State (bool) that determines whether the about Conways Game of Life Modal is displayed
    const [showGolModal, setShowGolModal] = useState(false)

    // State (bool) that determines whether the about me modal is displayed
    const [showMeModal, setShowMeModal] = useState(false)

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
    }, [generationActivity, rangeValue, advanceGeneration, toggleDisableCells])

    
    
    return (
        <>
        <CustomStyles />
        {/* Control panel and and title component */}
        <Container className="controlPanel d-flex flex-column justify-content-around  h-100" fluid>
            <div className="d-none d-xl-block">
                <h1 className="siteTitle">Conway<span className="titleApostrophe">'</span>s <br />Game of Life</h1>
            </div>
            <Col className="d-flex flex-column align-items-center align-items-xl-start">
                
                <div className="generations my-5">
                    <h1>Generations: <span className="generationsNumber">{generations}</span></h1>
                </div>

                <ButtonGroup vertical>
                        <Button variant="outline-primary" onClick={() => {setGenerationActivity(true); setButtonsWhileRunning(true); setStopButton(false)}} disabled={buttonsWhileRunning}>Start Game</Button>
                        <Button variant="outline-secondary" onClick={(e) => {randomizeCells()}} disabled={buttonsWhileRunning}>Randomize</Button>
                        <Button variant="outline-secondary" onClick={() => { advanceGeneration()}} disabled={buttonsWhileRunning}>Advance Generation</Button>
                        <Button variant="outline-light" onClick={() => {setGenerationActivity(false); setButtonsWhileRunning(false); setStopButton(true)}} disabled={stopButton}>Stop Game</Button>
                        <Button variant="outline-light" onClick={(e) => {clearCells()}} disabled={buttonsWhileRunning}>Clear</Button>
                </ButtonGroup>
                
                <div className="justify-content-center mt-4">
                    <p className="mb-2 adjustText">Adujst Speed of Game</p>
                    <input className="w-100" type="range" min="0" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange}></input>
                </div>
                <ButtonGroup vertical className="mt-4">
                    <Button variant="outline-info" onClick={() => {setShowGolModal(true)}}>About Conway's Game of Life</Button>
                    <Button variant="outline-info" onClick={() => {setShowMeModal(true)}}>About me</Button>
                </ButtonGroup>
            </Col>


        </Container>

        {/* React Bootstrap Modal Component - About Conways Game of Life */}
        <Modal
        show={showGolModal}
        onHide={() => setShowGolModal(false)}
        dialogClassName="wideModal"
        aria-labelledby="about-conways-game-of-life-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                About Conway's Game of Life
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Conway’s Game of Life is a classic computer science simulation that employs 
                    a few simple rules to create cellular automata that “live”, “die”, and create 
                    some stunning patterns throughout their collective lifecycles.</p>
                <p>The rules for the game of life are simple: A player is presented with a grid of 
                    cells that can have the condition of being either “dead” or “alive”. At the beginning 
                    of the game, the player switches the state of any of the cells of their choosing to the 
                    “alive” state. The player then initializes the simulation.</p>
                <p>Once the simulation is initialized, the cells then move on to successive generations where 
                    they either retain their state of being either “alive” or “dead” or alternate their state 
                    based on a set of a few simple rules which take into account the state of the cell’s 
                    “neighbors” - the cells that are directly adjacent to the cell in question. 
                    The rules are as follows:</p>
                <ListGroup variant="flush">
                    <ListGroup.Item>If a cell is alive and has either one or zero neighbors, the cell will be dead during the next generation.</ListGroup.Item>
                    <ListGroup.Item>If the cell is alive and has either two or three neighbors, the cell will continue to be alive during the next generation.</ListGroup.Item>
                    <ListGroup.Item>If a cell is alive and has more than three neighbors, it will be dead during the next generation.</ListGroup.Item>
                    <ListGroup.Item>If a cell is dead and has exactly three neighbors that are alive, it will be alive during the next generation.</ListGroup.Item>
                    <ListGroup.Item>Lastly, if a cell is dead and has any number of neighbors other than three, the cell will continue to be dead during the next generation.</ListGroup.Item>
                </ListGroup>
                <p className="mt-3">This simple set of rules allows the cells to either multiply or be reduced from generation to 
                    generation, sometimes forming some astounding patterns along the way. Perhaps the most interesting 
                    feature of Conway’s game of life is that it demonstrates that patterns of immense complexity can 
                    spring forth from a few simple constraints.</p>
                    <blockquote class="blockquote text-center">
                        <p class="mb-0 mt-4">Background information on Conway's Game of Life sourced from:</p>
                        <footer class="blockquote-footer">cs.standord.edu, <a href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/2001-02/cellular-automata/beginning/howtoplay.html" ><cite title="Source Title">The Game of Life</cite></a></footer>
                    </blockquote>
                
            </Modal.Body>
        </Modal>

        {/* React Bootstrap Modal Component - About Me */}
        <Modal
        show={showMeModal}
        onHide={() => setShowMeModal(false)}
        dialogClassName="wideModal"
        aria-labelledby="about-me-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                About Me
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container fluid>
            <Row className="justify-content-md-center align-items-center my-5 flex-column-reverse flex-md-row">
                <Col className="my-5 mx-auto mx-md-4 my-md-0" xs={10} sm={5} >
                    <h1>Hello</h1>
                    <p class="text-sm-left">My name is Jared. I am a web developer based out of Eugene, Oregon. I am passionate about implementing thoughtful and impactful web design using elegant coding strategies and modern web technologies.</p>
                    <p>Find out more about me and my work at <a href="https://www.jaredparrish.com/">JaredParrish.com</a></p>
                </Col>
                <Col className="my-4 mx-auto mx-md-4" xs={10} sm={5} lg={4}>
                    <Image id="jared-parrish-headshot" src={headshot} alt="Image of me, Jared Parrish" roundedCircle />
                </Col>  
            </Row>
            </Container>
            </Modal.Body>
        </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        generations: state.generations,
    }
}
export default connect(mapStateToProps, { advanceGeneration, clearCells, randomizeCells, toggleDisableCells })(ControlPanel)