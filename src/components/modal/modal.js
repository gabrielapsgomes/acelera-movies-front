import './modal.css'
import { useState } from 'react'

const Modal = ({ children, title, className, icon }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
     <a icon={icon} onClick={handleClick} className={className}>{title}</a>
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
