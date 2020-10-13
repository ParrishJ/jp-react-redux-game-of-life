export const TOGGLE_ALIVE = "TOGGLE_ALIVE";
export const ADVANCE_GENERATION = "ADVANCE_GENERATION";


export const toggleAlive = (cellId) => (dispatch) => {
    dispatch({ type: TOGGLE_ALIVE, payload: cellId })
}

export const advanceGeneration = () => (dispatch) => {
    dispatch({ type: ADVANCE_GENERATION })
}