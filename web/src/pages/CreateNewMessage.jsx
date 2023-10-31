import { useEffect, useState } from "react"
import { api } from "../lib/axios"

export function CreateNewMessage() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [idCategory, setIdCategory] = useState('')
    const [category, setCategory] = useState([])

    async function handleCreateMessage(event) {

        event.preventDefault()

        await api.post('/message', {
            title,
            content,
            id: idCategory
        })
    }

    useEffect(() => {
        async function handleGetCategory() {
            await api.get('/category')
                .then(response => {
                    setCategory(response.data.category)
                })
        }

        handleGetCategory()
    }, [])


    return (
        <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full flex items-center justify-center py-10">
                <h1 className="text-6xl text-black font-bold">Nova Mensagem</h1>
            </div>
            <form onSubmit={handleCreateMessage} className="w-[40%] rounded-lg flex flex-col items-center justify-center gap-y-8 py-8 bg-slate-600">
                <label htmlFor="" className="text-white text-4xl font-semibold">Título</label>
                <input onChange={event => setTitle(event.target.value)} className="w-72 h-10 rounded px-2 bg-zinc-700 text-white outline-none" type="text" placeholder="Títuto" />
                <label htmlFor="" className="text-white text-4xl font-semibold">Conteúdo</label>
                <textarea onChange={event => setContent(event.target.value)} className="rounded px-2 bg-zinc-700 text-white outline-none" cols="30" rows="5" placeholder="Conteúdo da mensagem"></textarea>
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
            </form>
        </div>
    )
}