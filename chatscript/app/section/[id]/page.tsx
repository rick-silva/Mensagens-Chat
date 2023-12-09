'use client'

import { Message } from "@/components/Message"
import axios from "axios"
import { useEffect, useState } from "react"

interface MessageProps {
    id: string
    title: string
    content: string
}

interface DataProps {
    Message: MessageProps[]
}


export default function MessagesCategorys({ params }: { params: { id: string } }) {

    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function getMessages() {
            await axios.get(`/api/category/${params.id}`)
                .then(response => {
                    setData(response.data.category)
                })
        }
        getMessages()
    }, [params])

    return (
        <div className="w-full h-full grid grid-cols-3 grid-flow-row gap-4">
            {data?.map(m =>
                m.Message?.map(e => {
                    return (
                        <Message
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