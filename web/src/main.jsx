import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./input.css"
import { MenubarDemo } from './assets/components/Menu/Menu'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='flex flex-col items-center justify-center bg-zinc-500'>
        <header className="flex justify-center align-center flex-col h-32">
          <h1 className=" text-center text-black text-5xl my-5">Atendimento Padrão CHAT</h1>
        </header>
        <MenubarDemo />
        <App />
      </main>
    </BrowserRouter>

  </React.StrictMode>,
)
