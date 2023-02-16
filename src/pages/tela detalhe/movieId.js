import { useState, useEffect } from 'react'
import { client } from '../../service/client'
import { ModalEdicao } from '../tela detalhe/editarFilme'
import { useParams } from 'react-router'
import './filme.css'
import Note from '../../components/estrelas'
import BotaoDel from '../../components/buttonDelete'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
      </div>
        <div className="filmesID">
        <div className="mainID">
                <h1 className="h1TitlesID">{movie.title} <ModalEdicao /> <BotaoDel icon={faTrash}/></h1> </div>
               <li className='liID'>
                <div className='cssImage'><img src={movie.image} className='imagemID'></img></div>
                <div className='dadosFilmesID'>
                <Note className='noteStar' note={movie.note} />
                <h1 className='h1subtitleID'>{movie.subtitle}</h1>
                <h1 className="h1DateID">Date: {handleDate(new Date(movie.releaseDate))}</h1>
                <h2 className="h2ResumeID">Resume:</h2>
                <h1 className="h1ResumeID">{movie.resume}</h1>
               </div>
              </li>
              <li className='liID2'>
                <div className='infoID'>
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
