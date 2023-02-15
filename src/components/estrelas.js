import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Note = ({ note }) => {
  const arrayNote = [1, 2, 3, 4, 5]
  return (
    <div className='noteStar'>
   {arrayNote.map(element => {
     return element <= note
       ? <FontAwesomeIcon icon={faStar} color='yellow' key={element}/>
       : <FontAwesomeIcon icon={faStar} color='grey' key={element}/>
   })
  }
  </div>
  )
}

export default Note
