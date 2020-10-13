import { TOGGLE_ALIVE, ADVANCE_GENERATION } from '../actions/cellActions'
import { cellsFromGenerator } from '../components/generator'

export const initialState = {

    cells: cellsFromGenerator
}

export const cellReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ALIVE:
            console.log(action.payload)
            /* for (let i = 0; i < state.cells.length; i++){
                const targetCell = state.cells[i].find(cell => cell.cellId == action.payload);
            } */

            for(let i = 0; i < state.cells.length; i++){
                for(let j = 0; j < state.cells[i].length; j++){
                  if(state.cells[i][j].cellId == action.payload){
                    state.cells[i][j].alive = !state.cells[i][j].alive
                  }
                }
              }
            return {
                ...state,
                cells: [...state.cells]
            }

        case ADVANCE_GENERATION:
            for(let i = 0; i < state.cells.length; i++){
                for(let j = 0; j < state.cells[i].length; j++){
                  let neighbors = 0;
                  //Logic for counting neighbors
                  
                  //top left
                  //top
                  //top right
                  //left
                  //right
                  //bottom left
                  //bottom
                  //bottom right
                  if(state.cells[i][j].alive){
                    neighbors ++;
                  }

                  //Logic for toggling alive state for state.cells[i][j].alive
                  if(state.cells[i][j].alive == true && neighbors < 2){
                    state.cells[i][j].alive = false
                  }
                  if(state.cells[i][j].alive == true && neighbors == 2 || neighbors == 3){
                    continue
                  }
                  if(state.cells[i][j].alive == true && neighbors > 3){
                    state.cells[i][j].alive = false
                  }
                  
                }
              }
            return {
            ...state,
            cells: [...state.cells]
        }

        default:
            return state;
    }
}