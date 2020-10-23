export const TOGGLE_ALIVE = "TOGGLE_ALIVE";
export const ADVANCE_GENERATION = "ADVANCE_GENERATION";
export const CLEAR_CELLS = "CLEAR_CELLS";
export const RANDOMIZE_CELLS = "RANDOMIZE_CELLS";
export const DISABLE_CELLS = "DISABLE_CELLS";


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