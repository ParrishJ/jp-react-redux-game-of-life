
# Jared Parrish’s React/Redux Implementation of Conway’s Game of Life :microbe:

Conway’s Game of Life is a classic computer science simulation that employs a few simple rules to create cellular automata that “live”, “die”, and create some stunning patterns throughout their collective lifecycles.

My Implementation uses [React](https://github.com/facebook/react), [Redux](https://github.com/reduxjs/redux), [React-BootStrap](https://github.com/react-bootstrap/react-bootstrap), and a handful of other libraries to create an aesthetically pleasing and performant model of John Conway’s famous game.

## What is Conway’s Game of Life?

Conway’s Game of Life is a classic computer science simulation that employs a few simple rules to create cellular automata that “live”, “die”, and create some stunning patterns throughout their collective lifecycles.

The rules for the game of life are simple: A player is presented with a grid of cells that can have the condition of being either “dead” or “alive”. At the beginning of the game, the player switches the state of any of the cells of their choosing to the “alive” state. The player then initializes the simulation.

Once the simulation is initialized, the cells then move on to successive generations where they either retain their state of being either “alive” or “dead” or alternate their state based on a set of a few simple rules which take into account the state of the cell’s “neighbors” - the cells that are directly adjacent to the cell in question. The rules are as follows:

* If a cell is alive and has either one or zero neighbors, the cell will be dead during the next generation.

* If the cell is alive and has either two or three neighbors, the cell will continue to be alive during the next generation.

* If a cell is alive and has more than three neighbors, it will be dead during the next generation.

* If a cell is dead and has exactly three neighbors that are alive, it will be alive during the next generation.

* Lastly, if a cell is dead and has any number of neighbors other than three, the cell will continue to be dead during the next generation.

This simple set of rules allows the cells to either multiply or be reduced from generation to generation, sometimes forming some astounding patterns along the way. Perhaps the most interesting feature of Conway’s game of life is that it demonstrates that patterns of immense complexity can spring forth from a few simple constraints.

Background information on Conway's Game of Life sourced from: cs.standord.edu, *[The Game of Life](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2001-02/cellular-automata/beginning/howtoplay.html)*

## My Implementation

My implementation uses React to map through nested arrays that contain objects representing each cell in the game. Each cell object has the following shape:

```
{
    alive: bool,
    clickable: bool,
    rowId: int,
    colId: int,
    cellId: int,
}
```
Because I’m using Redux, the state of the application is kept in a reducer. The state of the application holds the number of generations that have elapsed, the nested array of cells, a copy of that nested array to keep track of changes to the cell’s ‘alive’ state, and a boolean that keeps track of whether or not the cells can be altered. 

The logic for the changes to the cell’s alive state that occurs between generations also takes place in the reducer.

## Difficulties With My Implementation

Probably the most challenging element of this project was dealing with how JavaScript handles mutability of arrays and objects. Because JavaScript copies arrays by reference only, I ran into issues when I needed a copy of the cells array in the reducer to keep track of the generational changes of the cells. I was able to produce a copy of the array by using a generator function that produced an array of cells in the same shape as the original array. 

## Future Features

- [ ] Implement mobile styling for the game

- [ ] Implement functionality that would allow the user to change the shape and / or color of the cells. 

- [ ] Implement functionality that would allow the user to start the simulation off with some of the more interesting arrangements of cells that have been discovered in The Game of Life

