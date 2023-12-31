import React from 'react'

import LocationsData from "../Data/LocationsData.json"



const Glocations = (props) => {
  const rows = [];
  for (let i = 0; i < LocationsData.length; i += 3) {
    rows.push(LocationsData.slice(i, i + 3));
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

export default Glocations
