import { TOGGLE_ALIVE, ADVANCE_GENERATION, CLEAR_CELLS, RANDOMIZE_CELLS, DISABLE_CELLS,TOGGLE_FANCY_COLORS, TOGGLE_GENERATION_ACTIVITY, TOGGLE_STOP_BUTTON, TOGGLE_BUTTONS_WHILE_RUNNING, TOGGLE_SHOW_GOL_MODAL, TOGGLE_SHOW_ME_MODAL, TOGGLE_SHOW_WARNING_MODAL  } from '../actions/cellActions'
import {cellGenerator } from '../components/generator'

export const initialState = {
    generations: 0,
    cells: cellGenerator(),
    cellsCopy: cellGenerator(),
    cellsEnabled: true,
    gridColors: "Plain",
    generationActivity: false,
    buttonsWhileRunning: false,
    stopButton: true,
    showGolModal: false,
    showMeModal: false,
    showWarningModal: true,
    
}

let cellCount = 25

export const cellReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ALIVE:
            console.log(action.payload)
            
              //Action that uses row and column ids to target a specific cell and toggle its alive state
              state.cells[action.payload.row - 1][action.payload.col - 1].alive = !state.cells[action.payload.row - 1][action.payload.col - 1].alive
            return {
                ...state,
                cells: [...state.cells],
                
            }

        case ADVANCE_GENERATION:
            // Logic for determining the subsequent state of the cell's alive state between generations.
            // Most of the logic for Conway's Game of Life happens within this action. 
            state.generations++;
            for(let i = 0; i < state.cells.length; i++){
                for(let j = 0; j < state.cells[i].length; j++){
                  let neighbors = 0;
                  
                  
              //Logic for counting neighbors
              
              //Logic for determining next generation for cells on the top row (excluding the corners).
              //I'm looking at each of the cell's neighbors in the nested array and am keeping track of how many of the cell's neighbors are alive
              if(state.cells[i][j].rowId === 1 && state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== cellCount ){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the top row 
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;
                  
                }
                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }
                //bottom left
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;
                  
                }
                //bottom
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }
                //bottom right
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                }

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              }

              //Logic for determining next generation for cells on the bottom row (excluding the corners)
              if(state.cells[i][j].rowId === cellCount && state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== cellCount ){
                
                //top left
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 

                //top
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }          
                
                //top right 
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                }

                //left
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;
                  
                }
                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }
                
                /* I’m temporarily removing logic that would allow generations to propogate beyond the bottom row
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                } */

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              }

              //Logic for determining next generation for cells on the left edge (excluding the corners)
              if(state.cells[i][j].colId === 1 && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== cellCount ){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the left column 
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } */

                // top 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }

                // top right
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                }

               /*  I’m temporarily removing logic that would allow generations to propogate beyond the left column
                if(state.cells[i][j - 1].alive === true){
                  neighbors++; 
                } */

                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }
                
               /*  I’m temporarily removing logic that would allow generations to propogate beyond the left column
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;   
                } */
                
                //bottom 
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }

                //bottom right
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                }

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              }

              //Logic for determining next generation for cells on the right edge (excluding the corners)
              if(state.cells[i][j].colId === cellCount && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== cellCount ){
                
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 

                // top 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }

               /*  I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                //Right
                if(state.cells[i][j - 1].alive === true){
                  neighbors++; 
                }

                /* I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;  
                } */
                
                //bottom left
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;   
                }
                
                //bottom 
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }

               /*  I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                } */

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }

              }

              //Logic for determining next generation for cell on the top-left corner
              if(state.cells[i][j].rowId === 1 && state.cells[i][j].colId === 1){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the the top row
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                /* I’m temporarily removing logic that would allow generations to propogate beyond the the left column 
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;                
                } */

                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }

                /* I’m temporarily removing logic that would allow generations to propogate beyond the the left column
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;
                  
                } */

                //bottom
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }
                //bottom right
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                }

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              } 

              //Logic for determining next generation for cells on the top-right corner
              if(state.cells[i][j].rowId === 1 && state.cells[i][j].colId === cellCount){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the top row
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;
                  
                }
                
                /* I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                } */

                //bottom left
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;   
                }
                //bottom
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }


                /* I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                } */

                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              } 

              //Logic for determining next generation for cells on the bottom-left corner
              if(state.cells[i][j].colId === 1 && state.cells[i][j].rowId === cellCount){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the left column
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } */ 

                //top
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }          
                
                //top right 
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                }

                /* I’m temporarily removing logic that would allow generations to propogate beyond the left column
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;
                } */

                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }
                
                /* I’m temporarily removing logic that would allow generations to propogate beyond the bottom row
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                } */



                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              } 

              //Logic for determining next generation for cells on the bottom-right corner
              if(state.cells[i][j].rowId === cellCount && state.cells[i][j].colId === cellCount){

                 //top left
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 

                //top
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }          
                
                /* I’m temporarily removing logic that would allow generations to propogate beyond the right column 
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;
                  
                }

                /* I’m temporarily removing logic that would allow generations to propogate beyond the right column
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                } */
                
                /* I’m temporarily removing logic that would allow generations to propogate beyond the bottom row
                if(state.cells[i + 1][j - 1].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive === true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive === true){
                  neighbors++;
                } */


                //Logic for toggling alive state for state.cells[i][j].alive
                //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                if(state.cells[i][j].alive === false && neighbors === 3){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors < 2){
                  state.cellsCopy[i][j].alive = false
                }
                if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                  state.cellsCopy[i][j].alive = true
                }
                if(state.cells[i][j].alive === true && neighbors > 3){
                  state.cellsCopy[i][j].alive = false
                }
              } 


              //Logic for determining next generation for cells not on the edges of the grid
              if(state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== cellCount && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== cellCount ){
                  //top left
                  if(state.cells[i - 1][j - 1].alive === true){
                    neighbors++;
                    
                  }
                  //top
                  if(state.cells[i - 1][j].alive === true){
                    neighbors++;
                    
                  }
                  //top right
                  if(state.cells[i - 1][j + 1].alive === true){
                    neighbors++;
                    
                  }
                  //left
                  if(state.cells[i][j - 1].alive === true){
                    neighbors++;
                    
                  }
                  //right
                  if(state.cells[i][j + 1].alive === true){
                    neighbors++;
                    
                  }
                  //bottom left
                  if(state.cells[i + 1][j - 1].alive === true){
                    neighbors++;
                    
                  }
                  //bottom
                  if(state.cells[i + 1][j].alive === true){
                    neighbors++;
                    
                  }
                  //bottom right
                  if(state.cells[i + 1][j + 1].alive === true){
                    neighbors++;
                    
                  }
                  

                  //Logic for toggling alive state for state.cells[i][j].alive
                  //I'm using the neighbors count above and the rules of Conway's Game of Life to determine the alive state of each cell for the next generation.
                  if(state.cells[i][j].alive === false && neighbors === 3){
                    state.cellsCopy[i][j].alive = true
                  }
                  if(state.cells[i][j].alive === true && neighbors < 2){
                    state.cellsCopy[i][j].alive = false
                  }
                  if(state.cells[i][j].alive === true && (neighbors === 2 || neighbors === 3)){
                    state.cellsCopy[i][j].alive = true
                  }
                  if(state.cells[i][j].alive === true && neighbors > 3){
                    state.cellsCopy[i][j].alive = false
                  }
                }
              }
              
            }
            
            return {
            ...state,
            cells: [...state.cellsCopy],
            cellsCopy: cellGenerator(),
            generations: state.generations
            }

        case CLEAR_CELLS:
            
            //Use the cellGenerator function to create a new copy of the nested cells array, with all cell's alive state set to false
            return{
              ...state,
              cells: cellGenerator(),
              generations: 0,
            }

        case RANDOMIZE_CELLS:
          //Selects 400 random cells on the board and changes their alive state to true
          for(let i = 0; i < 125; i++){
            state.cellsCopy[Math.floor(Math.random() * (cellCount - 0) + 0)][Math.floor(Math.random() * (cellCount - 0) + 0)].alive = true
          }

        return{
          ...state,
          generations: 0,
          cells: [...state.cellsCopy],
          cellsCopy: cellGenerator(),
          
        }

        case TOGGLE_GENERATION_ACTIVITY:
          // Toggles toggles the value that determines whether the simulation runs or not
          return{
            ...state,
            generationActivity: action.payload,
          }

        case DISABLE_CELLS:
        //Disables the ability to click on and change the alive state of cells while simulation is running
        return{
          ...state,
          cellsEnabled: action.payload,
        }

        case TOGGLE_FANCY_COLORS:
          
        // Toggles the color of the grid
        return{
          ...state,
          gridColors: action.payload,
        }

        case TOGGLE_STOP_BUTTON:
          
          // Toggles the color of the grid
        return{
          ...state,
          stopButton: action.payload,
        }

        case TOGGLE_BUTTONS_WHILE_RUNNING:
          
        // Toggles the color of the grid
        return{
          ...state,
          buttonsWhileRunning: action.payload,
        }

        case TOGGLE_SHOW_GOL_MODAL:
          
        // Toggles display of Gol Modal
        return{
          ...state,
          showGolModal: action.payload,
        }

        case TOGGLE_SHOW_ME_MODAL:
          
        // Toggles display of Gol Modal
        return{
          ...state,
          showMeModal: action.payload,
        }

        case TOGGLE_SHOW_WARNING_MODAL:
          
        // Toggles display of Gol Modal
        return{
          ...state,
          showWarningModal: action.payload,
        }

        default:
            return state;
    }
}