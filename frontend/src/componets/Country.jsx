import React from 'react'
import Contries from "../Data/Contries.json"

const Count = (props) => {
    const rows = [];
    for (let i = 0; i < Contries.length; i += 3) {
      rows.push(Contries.slice(i, i + 3));
    }
        
  return (
    <>
       <div className="app">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map(location => (
            <div className="container-1" key={location.id}>
              <p>{location.name}</p>
              
            </div>
          ))}
        </div>
      ))}
    </div>
      
    </>
  )
}

export default Count

