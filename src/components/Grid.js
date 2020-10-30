import React from 'react'



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import { toggleAlive } from '../actions/cellActions'

import './Grid.scss'

// The grid component generates the 50 x 50 grid used by the game by mapping through the nested cell's array. 
// The first map funciton generates the rows, while the second map function generates the individual cells within those rows. 


const Grid = (props) => {

    let randomColor = 1;
    // Gets random integer between 1 and 4
    const getRandom = () =>{
        randomColor = Math.floor(Math.random() * (5 - 1) + 1);
        return randomColor
    }
    
    return (
        <Container className="grid" fluid>
            <Row className="d-xl-none">
                <h1 className="gridSiteTitle text-center mx-auto my-4">Conway<span className="titleApostrophe">'</span>s <br />Game of Life</h1>
            </Row>
           {props.cells.map(row => {

            if (props.gridColors === 'Fancy'){
               return (
                   <Row noGutters={true}>
                       {row.map(cell => {
                           getRandom();
                           if(cell.alive === true && randomColor === 1){
                            
                            return (
                                    <Col className="border cell activeCellLightOrange" 
                                    
                                        onClick={() => {
                                            props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                        }}
                                    ></Col>
                                    )
                            }

                            if(cell.alive === true && randomColor === 2){                            
                                return (
                                    <Col className="border cell activeCellOrange" 
                                    
                                        onClick={() => {
                                            props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                        }}
                                    ></Col>
                                    )
                                }
                                if(cell.alive === true && randomColor === 3){                            
                                    return (
                                        <Col className="border cell activeCellPink" 
                                        
                                            onClick={() => {
                                                props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                            }}
                                        ></Col>
                                        )
                                }
                                if(cell.alive === true && randomColor === 4){                            
                                    return (
                                        <Col className="border cell activeCellPurple" 
                                        
                                            onClick={() => {
                                                props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                            }}
                                        ></Col>
                                        )
                                }

                        else {
                            return (
                            
                                <Col className="border cell" style={{/* height: '2vw' */}} 
                                    onClick={() => { props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)}}>
                                </Col>
                                )
                        }
                       })}
                   </Row>
               )
            }
            if (props.gridColors === 'Plain'){
                return (
                    <Row noGutters={true}>
                        {row.map(cell => {
                            
                            if(cell.alive === true){
                             
                             return (
                                     <Col className="border cell activeCell" 
                                     
                                         onClick={() => {
                                             props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                         }}
                                     ></Col>
                                     )
                             }
                             
                         else {
                             return (
                             
                                 <Col className="border cell" style={{/* height: '2vw' */}} 
                                     onClick={() => { props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)}}>
                                 </Col>
                                 )
                         }
                        })}
                    </Row>
                )
            }
           })}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        cells: state.cells,
        cellsEnabled: state.cellsEnabled,
        gridColors: state.gridColors
    }
}
export default connect(mapStateToProps, { toggleAlive })(Grid)