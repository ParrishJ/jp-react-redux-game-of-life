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
    
    return (
        <Container className="grid" fluid>
            <Row className="d-xl-none">
                <h1 className="gridSiteTitle text-center mx-auto mb-4">Conway's <br />Game of Life</h1>
            </Row>
           {props.cells.map(row => {
               return (
                   <Row noGutters={true}>
                       {row.map(cell => {
                           if(cell.alive === true){
                            return (
                                <Col className="border cell" style={{/* height: '2vw', */ backgroundColor: 'white'}} 
                                
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
           })}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        cells: state.cells,
        cellsEnabled: state.cellsEnabled
    }
}
export default connect(mapStateToProps, { toggleAlive })(Grid)