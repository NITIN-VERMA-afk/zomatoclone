import React from 'react'


const Card = ({name,title,peragraph,logo}) => {
  return (
    <>
      <div className="card">
        <div className="logo-c"> {logo} </div>
        <div className="card-bot">
        <h1>{name}</h1>
        <h5>{title}</h5>
        <p>{peragraph} </p>
        </div>
       

      </div>

      
    </>
  )
}

export default Card

