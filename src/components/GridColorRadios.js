import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { connect } from 'react-redux'
import { toggleFancyColors, clearCells, toggleGenerationActivity, toggleStopButton, toggleButtonsWhileRunning } from '../actions/cellActions'

const GridColorRadios = ({ toggleFancyColors, clearCells, toggleGenerationActivity, toggleStopButton, toggleButtonsWhileRunning, stopButton, buttonsWhileRunning }) => {
    
    // State for radio color selector
    const [colorValue, setColorValue] = useState('Plain')

    // Color selector radios
    const colorSelectorRadios = [
        {name: 'Plain', value: 'Plain'},
        {name: 'Fancy', value: 'Fancy'}
    ]

    return (
        <>
         {/* Color Selector Radios */}
         <label  className="adjustText my-2" for="colorChangeRadio">Change Grid Color</label>
         <ButtonGroup toggle id="colorChangeRadio">
         {colorSelectorRadios.map((radio, idx) => (
         <ToggleButton
             key={idx}
             type="radio"
             variant="outline-secondary"
             name="colorSelectorRadio"
             value={radio.value}
             checked={colorValue === radio.value}
             onChange={(e) => {setColorValue(e.currentTarget.value); toggleFancyColors(e.currentTarget.value); clearCells(); toggleGenerationActivity(false); toggleButtonsWhileRunning(false); toggleStopButton(true);}}
         >
             {radio.name}
         </ToggleButton>
         ))}
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
export default connect(mapStateToProps, {toggleFancyColors, clearCells, toggleGenerationActivity, toggleStopButton, toggleButtonsWhileRunning})(GridColorRadios)