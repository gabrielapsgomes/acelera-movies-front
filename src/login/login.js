
const FormularioLogin = () => {
  return (
    <div className='logins'>
    <form>
        <input type="text" placeholder='Login:' />
        <input type="password" placeholder='Password:' />
        <button className='botaoEntrar'>Entrar</button>
      </form>
      </div>
  )
}

export default FormularioLogin
/* import { Modal } from './components/modal/modal'
const login = () => {
  return (
    <>
    <Modal
        label="login"
        >
          <FormularioLogin />
    </Modal>
    </>
  )
}

export default login */
