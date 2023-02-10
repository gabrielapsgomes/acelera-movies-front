import Modal from '../../components/modal/modal'
import { useState } from 'react'
import axios from 'axios'
import './home.css'

const TelaHome = () => {
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
      .post('http://localhost:9000/movie', movie)
      .then(response => {
      })
  }

  return (<body className='bodyHome'><Modal>
        <form id='formModal' onSubmit={handleSubmit}>

    <div className='input'><label htmlFor='Title'>Title</label>
        <input className='InputTitle' type="text" placeholder='Title' id='title' name='title' onChange={handleChange} /></div>

    <div className='input'><label htmlFor='Subtitle'>Subtitle</label>
        <input className='InputSubtitle' type="text" placeholder='Subtitle' id='subtitle' name='subtitle' onChange={handleChange}/></div>

     <label htmlFor='Resume'>Resume</label>
        <input className='InputResume' type="text" placeholder='Resume' id='resume' name='resume'onChange={handleChange}/>

   <div className='input'> <label htmlFor='Release Date'>Release Date</label>
        <input className='InputRDate' type="text" placeholder='Release Date' id='release date' name='releaseDate' onChange={handleChange}/></div>

    <div className='input'> <label htmlFor='Image'>Image</label>
        <input className='InputImage' type="text" placeholder='Image' id='image' name='image' onChange={handleChange}/></div>

    <div className='input'>  <label htmlFor='Director'>Director</label>
        <input className='InputDirector' type="text" placeholder='Director' id='director' name='director' onChange={handleChange}/></div>

    <div className='input'> <label htmlFor='Writer'>Writer</label>
        <input className='InputWriter' type="text" placeholder='Writer' id='writer' name='writer' onChange={handleChange}/></div>

    <div className='input'> <label htmlFor='Classification'>Classification</label>
        <input className='InputClass' type="text" placeholder='Classification' id='classification' name='classification' onChange={handleChange}/></div>

    <div className='input'> <label htmlFor='Studio'>Studio</label>
        <input className='InputStudio' type="text" placeholder='Studio' id='studio' name='studio' onChange={handleChange}/></div>

    <label htmlFor='Note'>Note</label>
        <input className='InputStars' type="integer" placeholder='Note' id='note' name='note' onChange={handleChange}/>

        <button onClick={handleSubmit} type = 'submit' className='botaoCriar'>Create Movie</button>

       </form>
  </Modal>
  </body>)
}
export default TelaHome
