import React, { useEffect, useState } from 'react'
import './homeMovies.css'
import TelaHome from './home'
import { client } from '../../service/client'

const HomeMovie = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    client.get('/movie').then(function (response) {
      setMovies(response.data)
    })
  })
  return (
    <div className="pageInteira">
      <div className="menu">
        <div className="hello">
          <h2>Hello, User!</h2>
        </div>
        <TelaHome />
      </div>
      <div className="main">
        <h1>All Movies</h1>
        <div className="filmes">
          <div>
            {movies.map((movie, key) => (
              <li key={key}>
                <img src={movie.image} className='imagem'></img>
                <h1 className="h1Titles">{movie.title}</h1>
                <h1 className="h1Date">{movie.releaseDate}</h1>
                <h2 className="h2Resume">Resume:</h2>
                <h1 className="h1Resume">{movie.resume}</h1>
                <h1 className="h1Note">{movie.note}</h1>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMovie
