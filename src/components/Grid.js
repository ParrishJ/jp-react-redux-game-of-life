import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import { toggleAlive } from '../actions/cellActions'


const Grid = (props) => {
    
    return (
        <div className="grid">
           {props.cells.map(row => {
               return (
                   <Row noGutters={true}>
                       {row.map(cell => {
                           {if(cell.alive == true){
                            return (
                                <Col className="border cell" style={{height: '2vw', backgroundColor: 'rebeccapurple'}} 
                                
                                    onClick={() => {
                                        props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)
                                    }}
                                ></Col>
                                )
                            }
                        else {
                            return (
                            
                                <Col className="border cell" style={{height: '2vw'}} 
                                    onClick={() => { props.cellsEnabled && props.toggleAlive(cell.rowId, cell.colId)}}>
                                </Col>
                                )
                        }}
                       })}
                   </Row>
               )
           })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cells: state.cells,
        cellsEnabled: state.cellsEnabled
    }
}
export default connect(mapStateToProps, { toggleAlive })(Grid)