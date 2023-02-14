import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FormularioLogin from './pages/tela login/login'
import HomeMovie from './pages/tela home/homeMovies'
import DetalheFilme from './pages/tela detalhe/movieId'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormularioLogin />} exact />
        <Route path="/home" element={<HomeMovie />} exact />
        <Route path="/movie/:id" element={<DetalheFilme />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
