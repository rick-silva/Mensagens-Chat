'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { Message } from "../Message"

interface DataProps {
    id: string
    content: string
    title: string
}

export function Messages() {

    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function handleGetMessage() {
            await axios.get('/api/message')
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
                    <Message
                        key={message.id}
                        id={message.id}
                        content={message.content}
                        title={message.title} />
                )
            })}
        </div>
    )
}