import { TOGGLE_ALIVE, ADVANCE_GENERATION, CLEAR_CELLS, RANDOMIZE_CELLS, DISABLE_CELLS } from '../actions/cellActions'
import {cellGenerator } from '../components/generator'

export const initialState = {
    generations: 0,
    cells: cellGenerator(),
    cellsCopy: cellGenerator(),
    cellsEnabled: true, 
    
}



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
         
            state.generations++;
            for(let i = 0; i < state.cells.length; i++){
                for(let j = 0; j < state.cells[i].length; j++){
                  let neighbors = 0;
                  
                  
              //Logic for counting neighbors
              
              //Logic for determining next generation for cells on the top row (excluding the corners).
              //I'm looking at each of the cell's neighbors in the nested array and am keeping track of how many of the cell's neighbors are alive
              if(state.cells[i][j].rowId === 1 && state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== 50 ){

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
              if(state.cells[i][j].rowId === 50 && state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== 50 ){
                
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
              if(state.cells[i][j].colId === 1 && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== 50 ){

                /* I’m temporarily removing logic that would allow generations to propogate beyond the left column 
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } */

                // top 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                }

                // top rith
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
              if(state.cells[i][j].colId === 50 && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== 50 ){
                
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

                /* Removing logic to have generations stop progogation beyond the top row - Will have generations stop at edges for now 
                if(state.cells[i - 1][j - 1].alive === true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive === true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive === true){
                  neighbors++;                 
                } */

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now 
                if(state.cells[i][j - 1].alive === true){
                  neighbors++;                
                } */

                //right
                if(state.cells[i][j + 1].alive === true){
                  neighbors++;
                  
                }

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
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
              if(state.cells[i][j].rowId === 1 && state.cells[i][j].colId === 50){

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
              if(state.cells[i][j].colId === 1 && state.cells[i][j].rowId === 50){

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
              if(state.cells[i][j].rowId === 50 && state.cells[i][j].colId === 50){

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
              if(state.cells[i][j].colId !== 1 && state.cells[i][j].colId !== 50 && state.cells[i][j].rowId !== 1 && state.cells[i][j].rowId !== 50 ){
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

            return{
              ...state,
              cells: cellGenerator(),
              generations: 0,
            }

        case RANDOMIZE_CELLS:
         
          for(let i = 0; i < 400; i++){
            //console.log(state.cellsCopy[randomCells[i].row][randomCells[i].col])
            state.cellsCopy[Math.floor(Math.random() * (50 - 0) + 0)][Math.floor(Math.random() * (50 - 0) + 0)].alive = true
          }

        return{
          ...state,
          cells: [...state.cellsCopy],
          cellsCopy: cellGenerator(),
          
        }

        case DISABLE_CELLS:

        return{
          ...state,
          cellsEnabled: action.payload,
        }

        default:
            return state;
    }
}