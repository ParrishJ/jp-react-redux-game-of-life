// This function generates copies of the nested cells array such that each cell starts with its alive state as false. 
// The result of the generation is an array that contains fifity nested arrays each with fifty elements
// Each cell has an alive state, a clickable state, a row id, column id, and individual cell id. 
// I'm using this function to get arount issues with mutability and JavaScript

export const cellGenerator = () => {
let cellCount = 25
let cells = []
let rowTracker = 1
let cellTracker = 0
let nestedArr = []
for(let h = 1; h < cellCount + 1; h++){
  
  for(let i = 1; i < cellCount + 1; i++){
    
    nestedArr.push(
      {
        alive: false,
        clickable: false,
        rowId: rowTracker,
        colId: i,
        cellId: cellTracker + parseInt([i]),
      }
    )
    
  }
  cells.push(nestedArr)
    rowTracker += 1
    cellTracker += cellCount
    nestedArr = []
}
return cells
}


