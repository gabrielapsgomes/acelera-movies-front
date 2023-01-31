import './login.css'

const FormularioLogin = () => {
  return (
    <form>
      <label htmlFor='login'>Login</label>
        <input className='InputName' type="text" placeholder='Login:' id='login'/>
      <label htmlFor='password'>Password</label>
        <input className='InputPassword' type="password" placeholder='Password:' id='password'/>
        <a href='Esqueceu a sua senha'>Esqueceu a sua senha?</a>
        <button className='botaoEntrar'>Entrar</button>
    </form>
  )
}

export default FormularioLogin
