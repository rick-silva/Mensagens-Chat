import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { OS } from './pages/OS'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/OS' element={<OS />} />
    </Routes>
  )
}

export default App
