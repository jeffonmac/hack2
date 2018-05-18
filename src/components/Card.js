import React from 'react'

const Card = ({ name, gender, image, affiliations }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img height='320px' width='200px' alt='character' src={image} />
      <div>
        <h2 class='chipolata'>{name}</h2>
        <p>
          {/*<iframe width="0" height="0 " src="https://www.youtube.com/embed/-bzWSJG93P8?rel=0&amp;controls=0&amp;showinfo=0?rel=0&amp;autoplay=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */} 
          {gender}
          </p>
         
          {/* {affiliations} */}

      </div>
    </div>
  )
}


export default Card;