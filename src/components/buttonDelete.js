import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'
import './buttonDelete.css'

const BotaoDel = ({ className, icon }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  async function handleClick (e) {
    e.preventDefault()
    if (confirm('Deseja excluir seu filme?')) {
      axios
        .delete('http://localhost:9000/movie/' + id)
        .then(() => navigate('/home'))
    }
  }
  return (
    <a onClick={handleClick} className='botaoDelete'> { icon ? <FontAwesomeIcon icon={icon}/> : null}</a>
  )
}
export default BotaoDel
