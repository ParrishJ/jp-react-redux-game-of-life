export const TOGGLE_ALIVE = "TOGGLE_ALIVE";
export const ADVANCE_GENERATION = "ADVANCE_GENERATION";
export const CLEAR_CELLS = "CLEAR_CELLS";
export const RANDOMIZE_CELLS = "RANDOMIZE_CELLS";
export const DISABLE_CELLS = "DISABLE_CELLS";
export const TOGGLE_FANCY_COLORS = "TOGGLE_FANCY_COLORS";
export const TOGGLE_GENERATION_ACTIVITY = "TOGGLE_GENERATION_ACTIVITY";
export const TOGGLE_STOP_BUTTON = "TOGGLE_STOP_BUTTON";
export const TOGGLE_BUTTONS_WHILE_RUNNING = "TOGGLE_BUTTONS_WHILE_RUNNING";
export const TOGGLE_SHOW_GOL_MODAL = "TOGGLE_SHOW_GOL_MODAL";
export const TOGGLE_SHOW_ME_MODAL = "TOGGLE_SHOW_ME_MODAL";
export const TOGGLE_SHOW_WARNING_MODAL = "TOGGLE_SHOW_WARNING_MODAL";


// The actions here are pretty self explanitory:
// The toggleAlive switches the alive state of a cell
// The advance generation action moves the game into its next generation
// The clear cells action sets the alive state of all of the cells to false, "clearing" the grid. It also sets the generations counter back to zero.
// randomizeCells resets the board with 400 random cells being switched to the alive state.
// toggleDisableCells makes the cells unclickable when the simulation is running


// All of the logic for the actions is kept in the reducer. 
// See the reducer file for more details on these actions.  
export const toggleAlive = (rowId, colId) => (dispatch) => {
    dispatch({ type: TOGGLE_ALIVE, payload: {row: rowId, col: colId} })
}

export const advanceGeneration = () => (dispatch) => {
    dispatch({ type: ADVANCE_GENERATION })
}

export const clearCells = () => (dispatch) => {
    dispatch({ type: CLEAR_CELLS })
}

export const randomizeCells = () => (dispatch) => {
    dispatch({ type: RANDOMIZE_CELLS })
}

export const toggleDisableCells = (bool) => (dispatch) => {
    dispatch({ type: DISABLE_CELLS, payload: bool })
}

export const toggleGenerationActivity = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_GENERATION_ACTIVITY, payload: bool })
}

export const toggleFancyColors = (string) => (dispatch) => {
    dispatch({ type: TOGGLE_FANCY_COLORS, payload: string })
}

export const toggleStopButton = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_STOP_BUTTON, payload: bool })
}

export const toggleButtonsWhileRunning = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_BUTTONS_WHILE_RUNNING, payload: bool })
}

export const toggleShowGolModal = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_SHOW_GOL_MODAL, payload: bool})
}

export const toggleShowMeModal = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_SHOW_ME_MODAL, payload: bool})
}

export const toggleShowWarningModal = (bool) => (dispatch) => {
    dispatch({ type: TOGGLE_SHOW_WARNING_MODAL, payload: bool})
}