import Mensagem from "./assets/components/Mensagem/mensagem"

import MensagemOS from "./assets/components/Mensagem/mensagemOs"

function App() {

  return (
    <div className="w-full h-screen" >
        <div className="flex justify-center align-center flex-col h-32">
          <h1 className=" text-center text-5xl my-5">Atendimento Padrão CHAT</h1>
        </div>
        <Mensagem />
        <MensagemOS />
        <details>Tv BOX</details>

    </div>
  )
}

export default App
