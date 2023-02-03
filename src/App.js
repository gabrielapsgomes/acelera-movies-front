import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FormularioLogin from './pages/tela login/login'
import HomeMovie from './pages/tela home/homeMovies'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormularioLogin />} exact />
        <Route path="/home" element={<HomeMovie />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
