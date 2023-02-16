import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'

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
    <button onClick={handleClick} className={className}> { icon ? <FontAwesomeIcon icon={icon}/> : null}</button>
  )
}
export default BotaoDel
