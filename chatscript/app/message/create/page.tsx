import { Form } from "@/components/Form"
import { useEffect, useState } from "react"

export default function CreateNewMessage() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full flex items-center justify-center py-10">
                <h1 className="text-6xl text-black font-bold">Nova Mensagem</h1>
            </div>
            <Form />
        </div>
    )
}