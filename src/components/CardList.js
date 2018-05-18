import React from 'react'
import Card from './Card'

const CardList = ({ character }) => {
  return (
    <div>
      {
        character.map((user, i) => {
          return (
            <Card
              key={i}
              image={character[i].image}
              gender={character[i].gender}
              name={character[i].name}
              affiliations={character[i].affiliations}
              />
            )
          })
          
          
        }
    </div>
  )

}

export default CardList