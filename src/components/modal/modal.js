import './modal.css'
import { useState } from 'react'

const Modal = ({ children }) => {
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
      {children}
     </div>
   </div>)}
    </>
  )
}

export default Modal

/*   <header>
      </header>
      {children}
  <header>
       <h2>{title}</h2>
      </header>
        */
