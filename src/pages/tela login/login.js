import './login.css'
import { useState } from 'react'
import { client } from '../../service/client'
import { useNavigate } from 'react-router'

const FormularioLogin = () => {
  const navigate = useNavigate()
  const [loginEntrar, setLoginEntrar] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginEntrar({
      ...loginEntrar,
      [name]: value
    })
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const { email, password } = loginEntrar
    if (!email || !password) {
      return alert('Preencha os campos corretamente')
    }
    await client.post('/login', { email: email, password: password })
      .then(response => response.data.auth && navigate('/home'))
      .catch(error => alert(error))
  }

  return (
    <body className='bodyLogin'>
    <form>
      <label className='labelLogin' htmlFor='login'>Login</label>
        <input className='InputName' type="text" placeholder='Login:' id='email' name='email' onChange={handleChange}/>
      <label className='labelPass' htmlFor='password'>Password</label>
        <input className='InputPassword' type="password" placeholder='Password:' id='password' name='password' onChange={handleChange}/>
        <a href='Esqueceu a sua senha'>Esqueceu a sua senha?</a>
        <button className='botaoEntrar' onClick={handleClick}>Entrar</button>
    </form>
    </body>
  )
}
export default FormularioLogin
