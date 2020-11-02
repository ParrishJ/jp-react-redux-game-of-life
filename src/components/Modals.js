import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import headshot from '../images/Jared-Parrish-Headshot.jpg'
import './Modals.scss'



import { connect } from 'react-redux'

import { toggleShowGolModal, toggleShowMeModal  } from '../actions/cellActions'

//Destructured props instead of just passing props here
const Modals = ({ showGolModal, showMeModal, toggleShowGolModal, toggleShowMeModal  }) => {
     
    return (
        <>
        
        
        {/* React Bootstrap Modal Component - About Conways Game of Life */}
        
        <Modal
        show={showGolModal}
        onHide={() => toggleShowGolModal(false)}
        dialogClassName="wideModal"
        aria-labelledby="about-conways-game-of-life-title"
        >
            <Modal.Header closeButton>
            <Modal.Title>
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
        onHide={() => toggleShowMeModal(false)}
        dialogClassName="wideModal"
        aria-labelledby="about-me-title"
        >
            <Modal.Header closeButton>
            <Modal.Title>
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
        showGolModal: state.showGolModal,
        showMeModal: state.showMeModal
    }
}

export default connect(mapStateToProps, { toggleShowGolModal, toggleShowMeModal  })(Modals)