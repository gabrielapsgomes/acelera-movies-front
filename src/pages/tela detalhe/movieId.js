import { useState, useEffect } from 'react'
import { client } from '../../service/client'
import { ModalEdicao } from '../tela detalhe/editarFilme'
import { useParams } from 'react-router'
import './filme.css'

const DetalheFilme = () => {
  const [movie, setMovies] = useState([])
  const { id } = useParams()
  useEffect(() => {
    client.get(`/movie/${id}`).then(function (response) {
      setMovies(response.data)
    })
  }, [])

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('en', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }

  return (
    <div className="pageInteiraID">
      <div className="menuID">
        <div className="helloID">
          <h2>Hello, User!</h2>
        </div>
       <ModalEdicao />
      </div>
        <div className="filmesID">
               <li className='liID'>
               <div className='dadosFilmesID'>
               <div className="mainID">
                <h1 className="h1TitlesID">{movie.title}</h1></div>
                <img src={movie.image} className='imagemID'></img>
                <h1 className='h1subtitleID'>{movie.subtitle}</h1>
                <h1 className="h1DateID">Date: {handleDate(new Date(movie.releaseDate))}</h1>
                <h2 className="h2ResumeID">Resume:</h2>
                <h1 className="h1ResumeID">{movie.resume}</h1>
                <h1 className="h1genderID">{movie.gender}</h1>
                <h1 className="h1classificacaoID">Classification: {movie.classification},</h1>
                <h1 className="h1diretorID">Director: {movie.director}</h1>
                <h1 className="h1writerID">Writer: {movie.writer}</h1>
                <h1 className="h1studioID">Studio: {movie.studio}</h1>
               </div>
              </li>
          </div>
        </div>
  )
}

export default DetalheFilme
