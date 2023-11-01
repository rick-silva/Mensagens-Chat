import { useEffect, useState } from "react"
import Mensagem from "../assets/components/Mensagem/mensagem"
import { api } from '../lib/axios'

export function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function handleGetMessage() {
            await api.get('/message')
                .then(response => {
                    setData(response.data.message)
                })
        }
        handleGetMessage()
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-3 grid-flow-row" >
            {data.map(message => {
                return (
                    <Mensagem
                        key={message.id}
                        id={message.id}
                        content={message.content}
                        title={message.title} />
                )
            })}
        </div>
    )
}