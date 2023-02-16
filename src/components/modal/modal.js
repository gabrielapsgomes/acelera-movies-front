import './modal.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({ children, title, className, icon }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
     <a onClick={handleClick} className={className}>{title} { icon ? <FontAwesomeIcon icon={icon}/> : null}</a>
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
