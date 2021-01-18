// This function generates copies of the nested cells array such that each cell starts with its alive state as false. 
// The result of the generation is an array that contains 25 nested arrays each with 25 elements, or cells, which each contain an object
// Each cell's object has an alive property, a clickable property, a row id property, column id property, and an individual cell id property. 
// I'm using this function to get around issues that arise from JavaScript passing arrays by reference 

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


