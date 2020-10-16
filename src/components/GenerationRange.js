import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { toggleAlive, advanceGeneration, clearCells, randomizeCells } from '../actions/cellActions'


const GenerationRange = (props) => {
     
    const [rangeValue, setRangeValue] = useState(25);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    }
    
    return (
        <div>
           <input type="range" min="0" max="50" value={rangeValue} onChange={handleRangeChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cells: state.cells,
        generations: state.generations,
    }
}
export default connect(mapStateToProps, { toggleAlive, advanceGeneration, clearCells, randomizeCells })(GenerationRange)