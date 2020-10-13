import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Grid = () => {
    let rowArr = []
    let colArr = []
    
    
    for(let i = 0; i < 100; i++){
        rowArr.push("0");
        colArr.push("0");
    }
    
    console.log(rowArr)

    return (
        <div>
           {rowArr.map(row => {
               return (
                   <Row noGutters={true}>
                       {colArr.map(col => {
                           return (
                           <Col className="border" style={{height: '1vw'}}/>
                           )
                       })}
                   </Row>
               )
           })}
        </div>
    )
}

export default Grid