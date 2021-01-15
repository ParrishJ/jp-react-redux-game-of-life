import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { connect } from 'react-redux'

import { toggleShowGolModal, toggleShowMeModal  } from '../actions/cellActions'

const ModalControls = ({ toggleShowGolModal, toggleShowMeModal }) => {
    return (
        <>
            <ButtonGroup vertical className="w-100 mt-4">
                <Button variant="outline-info" onClick={() => {toggleShowGolModal(true)}}>About Conway's Game of Life</Button>
                <Button variant="outline-info" onClick={() => {toggleShowMeModal(true)}}>About me</Button>
            </ButtonGroup>
        </>
    )
}

export default connect(null, { toggleShowGolModal, toggleShowMeModal })(ModalControls)