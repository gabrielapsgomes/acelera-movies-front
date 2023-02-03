import React from 'react'
import './homeMovies.css'
import TelaHome from './home'

const HomeMovie = () => {
  return (
  <div className='pageInteira'>
     <div className='menu'>
       <div className='hello'>
        <h2>Hello, User!</h2>
       </div>
       < TelaHome />
     </div>
     <div className='main'>
      <h1>All Movies</h1>
      <div className='filmes'>
        <div>

        </div>
      </div>
     </div>
  </div>
  )
}

export default HomeMovie
