import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useParams } from 'react-router'

const BotaoDel = ({ className, icon }) => {
  const { id } = useParams()
  async function handleClick (e) {
    e.preventDefault()
    alert('Deseja excluir seu filme?')
    axios
      .delete('http://localhost:9000/movie/' + id, movie)
      .then(() => location.reload())
  }
  return (
    <button onClick={handleClick} className={className}> { icon ? <FontAwesomeIcon icon={icon}/> : null}</button>
  )
}
export default BotaoDel

/*
  const navigate = useNavigate()
*/
