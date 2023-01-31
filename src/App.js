import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FormularioLogin from './pages/tela login/login'
import TelaHome from './pages/tela home/home'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormularioLogin />} exact />
        <Route path="/home" element={<TelaHome />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
