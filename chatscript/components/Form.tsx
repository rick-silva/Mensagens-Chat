'use client'

import axios from "axios"
import { FormEvent, useEffect, useState } from "react"

interface CategoryProps {
    id: string
    title: string
}

export function Form() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [idCategory, setIdCategory] = useState('')
    const [category, setCategory] = useState<CategoryProps[]>([])
    const [message, setMessage] = useState('')

    async function handleCreateMessage(event: FormEvent) {

        event.preventDefault()

        try {
            await axios.post('/api/message/create', {
                title,
                content,
                id: idCategory
            })
            setMessage('Cadastrado com sucesso')
        } catch (err) {
            setMessage('Algo de errado aconteceu')
        }
    }

    useEffect(() => {
        async function handleGetCategory() {
            await axios.get('/api/category')
                .then(response => {
                    setCategory(response.data)
                })
        }

        handleGetCategory()
    }, [])
    return (
        <form onSubmit={handleCreateMessage} className="w-[40%] rounded-lg flex flex-col items-center justify-center gap-y-8 py-8 bg-slate-600">
            <label htmlFor="" className="text-white text-4xl font-semibold">Título</label>
            <input onChange={event => setTitle(event.target.value)} className="w-72 h-10 rounded px-2 bg-zinc-700 text-white outline-none" type="text" placeholder="Títuto" />
            <label htmlFor="" className="text-white text-4xl font-semibold">Conteúdo</label>
            <textarea onChange={event => setContent(event.target.value)} className="rounded px-2 bg-zinc-700 text-white outline-none" cols={30} rows={5} placeholder="Conteúdo da mensagem"></textarea>
            <label htmlFor="" className="text-white text-4xl text-center font-semibold">Categoria da Mensagem</label>
            <select onChange={event => setIdCategory(event.target.value)} className="bg-zinc-700 h-10 rounded text-white">
                <option selected value="null">Selecione a categoria da mensagem</option>
                {category.map(cat => {
                    return (
                        <option value={cat.id}>{cat.title}</option>
                    )
                })}
            </select>
            <button type="submit" className="bg-zinc-800 rounded p-4 text-white hover:bg-zinc-700 transition-colors">Salvar</button>
            {!message ? '' : <span className="text-black text-xl font-semibold">{message}</span>}
        </form>
    )
}