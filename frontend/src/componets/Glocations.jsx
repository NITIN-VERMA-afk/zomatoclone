import React from 'react'

const Glocations = (props) => {
  // const containerData = ['Container 1', 'Container 2', 'Container 3'];
  
  return (
    <>
     {/* <div className="grid-container">
      {containerData.map((containerText, index) => (
        <div key={index} className="g-container">
          {containerText}
        </div>
      ))}
    </div> */}

    <div class="grid-container">
  <div class="g-container">{props.name}</div>
  <div class="g-container">{props.name}</div>
  <div class="g-container">{props.name}</div>
</div>
   
      
    </>
  )
}

export default Glocations
