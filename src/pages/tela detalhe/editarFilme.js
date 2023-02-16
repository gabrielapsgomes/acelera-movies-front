import Modal from '../../components/modal/modal'
import axios from 'axios'
import { useState } from 'react'
import './editarFilme.css'
import { useParams } from 'react-router'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export const ModalEdicao = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: '',
    director: '',
    writer: '',
    studio: '',
    actors: '',
    resume: '',
    awards: '',
    note: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMovie({
      ...movie,
      [name]: value
    })
  }

  async function handleSubmit (e) {
    e.preventDefault()
    axios
      .put('http://localhost:9000/movie/' + id, movie)
      .then(() => location.reload())
  }

  return (<body className='bodyID'><Modal className='botaoEditar' icon={faPen}>
  <form id='formModalID' onSubmit={handleSubmit}>

<div className='inputID'><label className='labelID' htmlFor='Title'>Title</label>
  <input className='InputTitleID' type="text" placeholder='Title' id='title' name='title' onChange={handleChange} /></div>

<div className='inputID'><label className='labelID' htmlFor='Subtitle'>Subtitle</label>
  <input className='InputSubtitleID' type="text" placeholder='Subtitle' id='subtitle' name='subtitle' onChange={handleChange}/></div>

<label className='labelID' htmlFor='Resume'>Resume</label>
  <input className='InputResumeID' type="text" placeholder='Resume' id='resume' name='resume'onChange={handleChange}/>

<div className='inputID'> <label className='labelID' htmlFor='Release Date'>Release Date</label>
  <input className='InputRDateID' type="text" placeholder='Release Date' id='release date' name='releaseDate' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Image'>Image</label>
  <input className='InputImageID' type="text" placeholder='Image' id='image' name='image' onChange={handleChange}/></div>

<div className='inputID'>  <label className='labelID' htmlFor='Director'>Director</label>
  <input className='InputDirectorID' type="text" placeholder='Director' id='director' name='director' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Writer'>Writer</label>
  <input className='InputWriterID' type="text" placeholder='Writer' id='writer' name='writer' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Classification'>Classification</label>
  <input className='InputClassID' type="text" placeholder='Classification' id='classification' name='classification' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Studio'>Studio</label>
  <input className='InputStudioID' type="text" placeholder='Studio' id='studio' name='studio' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Gender'>Gender</label>
        <input className='InputGenderID' type="text" placeholder='Gender' id='gender' name='gender' onChange={handleChange}/></div>

<div className='inputID'> <label className='labelID' htmlFor='Actors'>Actors</label>
        <input className='InputActorsID' type="text" placeholder='Actors' id='actors' name='actors' onChange={handleChange}/></div>

<label className='labelID' htmlFor='NoteID'>Stars</label>
  <input className='InputStarsID' type="integer" placeholder='Stars' id='note' name='note' onChange={handleChange}/>

  <button onClick={handleSubmit} type ='submit' className='update'>Send Update</button>

 </form>
</Modal>
</body>)
}
