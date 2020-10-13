export const cellGenerator = () => {

let cells = []
let rowTracker = 1
let cellTracker = 0
let nestedArr = []
for(let h = 1; h < 51; h++){
  
  for(let i = 1; i < 51; i++){
    
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
    cellTracker += 50
    nestedArr = []
}
return cells
}


export const cellsFromGenerator = cellGenerator()
export const cellsCopyFromGenerator = cellGenerator()
export const cellsCopyTwo = cellGenerator()
