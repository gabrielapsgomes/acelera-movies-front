import Modal from '../../components/modal/modal'
import { useState } from 'react'
import './home.css'

const TelaHome = () => {
  const [setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (<body className='bodyHome'><Modal>
        <form id='formModal'>

    <div className='input'><label htmlFor='Title'>Title</label>
        <input className='InputTitle' type="text" placeholder='Title' id='title' name='title'/></div>

    <div className='input'><label htmlFor='Subtitle'>Subtitle</label>
        <input className='InputSubtitle' type="text" placeholder='Subtitle' id='subtitle' name='subtitle'/></div>

    <label htmlFor='Resume'>Resume</label>
        <input className='InputResume' type="text" placeholder='Resume' id='resume' name='resume'/>

   <div className='input'> <label htmlFor='Release Date'>Release Date</label>
        <input className='InputRDate' type="text" placeholder='Release Date' id='release date' name='release date'/></div>

    <div className='input'> <label htmlFor='Image'>Image</label>
        <input className='InputImage' type="text" placeholder='Image' id='image' name='image'/></div>

    <div className='input'>  <label htmlFor='Director'>Director</label>
        <input className='InputDirector' type="text" placeholder='Director' id='director' name='director'/></div>

    <div className='input'> <label htmlFor='Writer'>Writer</label>
        <input className='InputWriter' type="text" placeholder='Writer' id='writer' name='writer'/></div>

    <div className='input'> <label htmlFor='Classification'>Classification</label>
        <input className='InputClass' type="text" placeholder='Classification' id='classification' name='classification'/></div>

    <div className='input'> <label htmlFor='Studio'>Studio</label>
        <input className='InputStudio' type="text" placeholder='Studio' id='studio' name='studio'/></div>

    <label htmlFor='Stars'>Stars</label>
        <input className='InputStars' type="number" placeholder='Stars' id='stars' name='stars'/>

        <button onClick={handleClick} className='botaoCriar'>Create Movie</button>

       </form>
  </Modal>
  </body>)
}

export default TelaHome
