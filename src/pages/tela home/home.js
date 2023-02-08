import Modal from '../../components/modal/modal'
import { useState } from 'react'
import './home.css'

const TelaHome = ({ onChange }) => {
  const [setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (<body className='bodyHome'><Modal>
        <form id='formModal'>

    <div className='input'><label htmlFor='Title'>Title</label>
        <input className='InputTitle' type="text" placeholder='Title' id='title' name='title' onChange={onChange}/></div>

    <div className='input'><label htmlFor='Subtitle'>Subtitle</label>
        <input className='InputSubtitle' type="text" placeholder='Subtitle' id='subtitle' name='subtitle' onChange={onChange}/></div>

     <label htmlFor='Resume'>Resume</label>
        <input className='InputResume' type="text" placeholder='Resume' id='resume' name='resume'onChange={onChange}/>

   <div className='input'> <label htmlFor='Release Date'>Release Date</label>
        <input className='InputRDate' type="text" placeholder='Release Date' id='release date' name='release date' onChange={onChange}/></div>

    <div className='input'> <label htmlFor='Image'>Image</label>
        <input className='InputImage' type="text" placeholder='Image' id='image' name='image' onChange={onChange}/></div>

    <div className='input'>  <label htmlFor='Director'>Director</label>
        <input className='InputDirector' type="text" placeholder='Director' id='director' name='director' onChange={onChange}/></div>

    <div className='input'> <label htmlFor='Writer'>Writer</label>
        <input className='InputWriter' type="text" placeholder='Writer' id='writer' name='writer' onChange={onChange}/></div>

    <div className='input'> <label htmlFor='Classification'>Classification</label>
        <input className='InputClass' type="text" placeholder='Classification' id='classification' name='classification' onChange={onChange}/></div>

    <div className='input'> <label htmlFor='Studio'>Studio</label>
        <input className='InputStudio' type="text" placeholder='Studio' id='studio' name='studio' onChange={onChange}/></div>

    <label htmlFor='Stars'>Stars</label>
        <input className='InputStars' type="number" placeholder='Stars' id='stars' name='stars' onChange={onChange}/>

        <button onClick={handleClick} className='botaoCriar'>Create Movie</button>

       </form>
  </Modal>
  </body>)
}

export default TelaHome
