import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FormularioLogin from './pages/login/login'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormularioLogin />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
