import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../lib/axios"
import Mensagem from "../assets/components/Mensagem/mensagem"

export function Messages() {

    const [data, setData] = useState([])

    const params = useParams()

    useEffect(() => {
        async function getMessages() {
            await api.get(`/category/${params.id}`)
                .then(response => {
                    setData(response.data.category)
                })
        }
        getMessages()
    }, [params])

    return (
        <div className="w-full h-full grid grid-cols-3 grid-flow-row gap-4">
            {data?.map(m =>
                m.message.map(e => {
                    return (
                        <Mensagem
                            key={e.id}
                            title={e.title}
                            id={e.id}
                            content={e.content}
                        />
                    )
                })
            )}
        </div>
    )
}