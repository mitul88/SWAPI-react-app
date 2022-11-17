import React from 'react'
import Card from '../card/Card'
import "./itemContainer.css"

const ItemContainer = ({data}) => {
  return (
    <div className='container'>
        {data.map((character, index)=> (
            <Card 
              character={character} 
              homeworld={character.homeworld} 
              species={character.species} 
              vehicles={character.vehicles} 
              starships={character.starships} 
              films={character.films} 
              key={index} 
            />
        ))}
    </div>
  )
}

export default ItemContainer