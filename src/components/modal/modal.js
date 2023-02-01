import './modal.css'
import { useState } from 'react'

const Modal = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
     <a onClick={handleClick} className='botaoAdicionar'>Add Movie</a>
    {toggle && (
     <div className="modal-container">
      <div className="modal">
       <header>
      </header>
      {children}
     </div>
   </div>)}
    </>
  )
}

export default Modal

/*  <header>
       <h2>{title}</h2>
      </header>
        */
