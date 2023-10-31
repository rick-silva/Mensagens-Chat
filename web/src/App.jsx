import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateNewMessage } from './pages/CreateNewMessage'
import { Messages } from './pages/anyPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/section/:id' element={<Messages />} />
      <Route path='/admin/create' element={<CreateNewMessage />} />
    </Routes>
  )
}

export default App
