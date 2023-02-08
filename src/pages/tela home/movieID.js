// import { useNavigate } from "react-router"
/* import { client } from '../../service/client'
import { useState, useEffect } from 'react'
import './movieID.css'

const filmesID = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    client.get('/movie').then(function (response) {
      setMovies(response.data)
    })
  }, [])

  return (
  <div className='IDfilmes'>
  {movies.map((movie, key) => (
    <li key={key}>
      <img src={movie.image} className='imagem'></img>
     <div className='todoFilme'>
      <h1 className="titulo">{movie.title}</h1>
      <h1 className="gender">{movie.gender}</h1>
      <h1 className="classificacao">{movie.classification}</h1>
      <h1 className="subtitle">{movie.subtitle}</h1>
      <h1 className="data">{movie.releaseDate}</h1>
      <h1 className="diretor">{movie.director}</h1>
      <h1 className="writer">{movie.writer}</h1>
      <h1 className="studio">{movie.studio}</h1>
      <h1 className="actors">{movie.actors}</h1>
      <h1 className="resumo">{movie.resume}</h1>
      <h1 className="awards">{movie.awards}</h1>
      <h1 className="nota">{movie.note}</h1>
      </div>
    </li>
  ))}
   </div>
  )
}

export default filmesID
// const navigate = useNavigate()
// client.put('/movie/:id')
*/
