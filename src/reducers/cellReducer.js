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
              
              
              //Logic for determining next generation for cells on the top row (excluding the corners)
              if(state.cells[i][j].rowId == 1 && state.cells[i][j].colId != 1 && state.cells[i][j].colId != 50 ){

                /* Removing logic to have generations stop progogation beyond the top row - Will have generations stop at edges for now 
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;
                  
                }
                //right
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                  
                }
                //bottom left
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;
                  
                }
                //bottom
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }
                //bottom right
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
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

              //Logic for determining next generation for cells on the bottom row (excluding the corners)
              if(state.cells[i][j].rowId == 50 && state.cells[i][j].colId != 1 && state.cells[i][j].colId != 50 ){
                
                //top left
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 

                //top
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                }          
                
                //top right 
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                }

                //left
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;
                  
                }
                //right
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                  
                }
                
                /* Removing logic to have generations stop progogation beyond the bottom row - Will have generations stop at edges for now 
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
                } */

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

              //Logic for determining next generation for cells on the left edge (excluding the corners)
              if(state.cells[i][j].colId == 1 && state.cells[i][j].rowId != 1 && state.cells[i][j].rowId != 50 ){

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } */

                // top 
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                }

                // top rith
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                }

               /*  Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i][j - 1].alive == true){
                  neighbors++; 
                } */

                //right
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                  
                }
                
               /*  Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;   
                } */
                
                //bottom 
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }

                //bottom right
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
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

              //Logic for determining next generation for cells on the right edge (excluding the corners)
              if(state.cells[i][j].colId == 50 && state.cells[i][j].rowId != 1 && state.cells[i][j].rowId != 50 ){
                
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 

                // top 
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                }

               /*  Removing logic to have generations stop progogation beyond the RTCIceGatherer column - Will have generations stop at edges for now
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                } */

                //Right
                if(state.cells[i][j - 1].alive == true){
                  neighbors++; 
                }

                /* Removing logic to have generations stop progogation beyond the RTCIceGatherer column - Will have generations stop at edges for now
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;  
                } */
                
                //bottom left
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;   
                }
                
                //bottom 
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }

               /*  Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
                } */

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

              //Logic for determining next generation for cell on the top-left corner
              if(state.cells[i][j].rowId == 1 && state.cells[i][j].colId == 1){

                /* Removing logic to have generations stop progogation beyond the top row - Will have generations stop at edges for now 
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                } */

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now 
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;                
                } */

                //right
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                  
                }

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;
                  
                } */

                //bottom
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }
                //bottom right
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
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

              //Logic for determining next generation for cells on the top-right corner
              if(state.cells[i][j].rowId == 1 && state.cells[i][j].colId == 50){

                /* Removing logic to have generations stop progogation beyond the top row - Will have generations stop at edges for now 
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;
                  
                }
                
                /* Removing logic to have generations stop progogation beyond the right column - Will have generations stop at edges for now
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                } */

                //bottom left
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;   
                }
                //bottom
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }


                /* Removing logic to have generations stop progogation beyond the right column - Will have generations stop at edges for now
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
                } */

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

              //Logic for determining next generation for cells on the bottom-left corner
              if(state.cells[i][j].colId == 1 && state.cells[i][j].rowId == 50){

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } */ 

                //top
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                }          
                
                //top right 
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                }

                /* Removing logic to have generations stop progogation beyond the left column - Will have generations stop at edges for now
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;
                } */

                //right
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                  
                }
                
                /* Removing logic to have generations stop progogation beyond the bottom row - Will have generations stop at edges for now 
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
                } */



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

              //Logic for determining next generation for cells on the bottom-right corner
              if(state.cells[i][j].rowId == 50 && state.cells[i][j].colId == 50){

                 //top left
                if(state.cells[i - 1][j - 1].alive == true){
                  neighbors++;
                } 

                //top
                if(state.cells[i - 1][j].alive == true){
                  neighbors++;
                }          
                
                /* Removing logic to have generations stop progogation beyond the right column - Will have generations stop at edges for now 
                if(state.cells[i - 1][j + 1].alive == true){
                  neighbors++;                 
                } */

                //left
                if(state.cells[i][j - 1].alive == true){
                  neighbors++;
                  
                }

                /* Removing logic to have generations stop progogation beyond the right column - Will have generations stop at edges for now
                if(state.cells[i][j + 1].alive == true){
                  neighbors++;
                } */
                
                /* Removing logic to have generations stop progogation beyond the bottom row - Will have generations stop at edges for now 
                if(state.cells[i + 1][j - 1].alive == true){
                  neighbors++;
                  
                }             
                if(state.cells[i + 1][j].alive == true){
                  neighbors++; 
                }
                if(state.cells[i + 1][j + 1].alive == true){
                  neighbors++;
                } */


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


              //Logic for determining next generation for cells not on the edges of the grid
              if(state.cells[i][j].colId != 1 && state.cells[i][j].colId != 50 && state.cells[i][j].rowId != 1 && state.cells[i][j].rowId != 50 ){
                  //top left
                  if(state.cells[i - 1][j - 1].alive == true){
                    neighbors++;
                    
                  }
                  //top
                  if(state.cells[i - 1][j].alive == true){
                    neighbors++;
                    
                  }
                  //top right
                  if(state.cells[i - 1][j + 1].alive == true){
                    neighbors++;
                    
                  }
                  //left
                  if(state.cells[i][j - 1].alive == true){
                    neighbors++;
                    
                  }
                  //right
                  if(state.cells[i][j + 1].alive == true){
                    neighbors++;
                    
                  }
                  //bottom left
                  if(state.cells[i + 1][j - 1].alive == true){
                    neighbors++;
                    
                  }
                  //bottom
                  if(state.cells[i + 1][j].alive == true){
                    neighbors++;
                    
                  }
                  //bottom right
                  if(state.cells[i + 1][j + 1].alive == true){
                    neighbors++;
                    
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