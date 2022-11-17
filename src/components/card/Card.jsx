import React from 'react'
import "./card.css"

const Card = ({character}) => {
  return (
    <div className='card'>
      <div className="card-title">
        <h4>{character.name.toUpperCase()}</h4>
      </div>
      <div className="card-content">
        <h4><span>Birth Year:</span><span style={{fontWeight: "bolder", color: "#557153"}}> {character.birth_year}</span></h4>
        <h4><span>Height:</span><span style={{fontWeight: "bolder", color: "#557153"}}> {character.height}</span></h4>
        <h4><span>Mass:</span><span style={{fontWeight: "bolder", color: "#557153"}}> {character.mass}</span></h4>
        <h4><span>Hair Color:</span><span style={{fontWeight: "bolder", color: "#557153"}}> {character.hair_color}</span></h4>
      </div>
      <div style={{width: "100%"}}>
        <button className="btn">Learn More</button>
      </div>
    </div>
  )
}

export default Card