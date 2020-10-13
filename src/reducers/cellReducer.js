import { TOGGLE_ALIVE, ADVANCE_GENERATION } from '../actions/cellActions'
import { cellsFromGenerator, cellsCopyFromGenerator, cellsCopyTwo, cellGenerator } from '../components/generator'

export const initialState = {

    cells: cellsFromGenerator,
    cellsCopy: cellsCopyFromGenerator,
    cellsCopyTwo: cellsCopyTwo
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
                cells: [...state.cells],
                
            }

        case ADVANCE_GENERATION:
         
          
          
            for(let i = 0; i < state.cells.length; i++){
                //console.log('i', state.cells[i])
                for(let j = 0; j < state.cells[i].length; j++){
                  let neighbors = 0;
                  //console.log('j', state.cells[i][j])
                  
                  //Logic for counting neighbors
                  
              if(state.cells[i][j].colId != 1 && state.cells[i][j].colId != 50 && state.cells[i][j].rowId != 1 && state.cells[i][j].rowId != 50 ){
                  //top left
                  if(state.cells[i - 1][j - 1].alive == true){
                    /* console.log('top left', state.cells[i - 1][j - 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  //top
                  if(state.cells[i - 1][j].alive == true){
                   /*  console.log('top', state.cells[i - 1][j].cellId) */
                    neighbors++;
                    debugger
                  }
                  //top right
                  if(state.cells[i - 1][j + 1].alive == true){
                    /* console.log('top right', state.cells[i - 1][j + 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  //left
                  if(state.cells[i][j - 1].alive == true){
                    /* console.log('left', state.cells[i][j - 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  //right
                  if(state.cells[i][j + 1].alive == true){
                    /* console.log('right', state.cells[i][j + 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  //bottom left
                  if(state.cells[i + 1][j - 1].alive == true){
                    /* console.log('bottom left', state.cells[i + 1][j - 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  //bottom
                  if(state.cells[i + 1][j].alive == true){
                    /* console.log('bottom', state.cells[i + 1][j].cellId) */
                    neighbors++;
                    debugger
                  }
                  //bottom right
                  if(state.cells[i + 1][j + 1].alive == true){
                    /* console.log('bottom-right', state.cells[i + 1][j + 1].cellId) */
                    neighbors++;
                    debugger
                  }
                  

                  //Logic for toggling alive state for state.cells[i][j].alive
                  if(state.cells[i][j].alive == false && neighbors == 3){
                    state.cellsCopy[i][j].alive = true
                  }
                  if(state.cells[i][j].alive == true && neighbors < 2){
                    state.cellsCopy[i][j].alive = false
                  }
                  if(state.cells[i][j].alive == true && (neighbors == 2 || neighbors == 3)){
                    state.cellsCopy[i][j].alive = true
                  }
                  if(state.cells[i][j].alive == true && neighbors > 3){
                    state.cellsCopy[i][j].alive = false
                  }
                }
              }
            }
            
            return {
            ...state,
            cells: [...state.cellsCopy],
            cellsCopy: cellGenerator(),
            
            }

        default:
            return state;
    }
}