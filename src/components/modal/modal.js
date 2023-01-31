import './modal.css'
import { useState } from 'react'

export const Modal = ({ children, label, title }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
     <button onClick={handleClick}>{label}</button>

    {toggle && (
     <div className="modal-container">
      <div className="modal">
       <header>
        <h2>{title}</h2>
        <button onClick={handleClick} className="close">x</button>
      </header>
       {children}
     </div>
   </div>)}
    </>
  )
}
