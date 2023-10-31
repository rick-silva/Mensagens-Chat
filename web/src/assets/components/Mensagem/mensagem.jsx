import React from "react";

import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

import './mensagem.css'
import axios from "axios";

const Mensagem = () => {


    const [copyText, setCopyText] = useState();

    const [copyTitle, setCopyTitle] = useState();

    const [cards, setCards] = useState([]);
    const [idCard, setIdCard] = useState();

    // Loading
    // const [loading, setloading] = useState([true])




    useEffect(() => {
        //executa o metodo get na API, recuperando seus dados JSON
        axios.get("src/data/msg.json")

            //caso a requisição retorne uma resposta positiva
            .then((response) => {
                //data -> informa cada dado da resposta(response) da api
                console.log("conexão ok")
                setCards(response.data)
                console.log(response.data)
                // setloading(false)

                //catch -> caso a requisição retorne uma resposta negativa
            }).catch(() => {
                console.log("Falha na API Mensagens")
            })
    }, [])

    const Copiar = (id) => {
        let text = document.querySelector(`.${id}`).innerText
        // let title = document.getElementById("title").innerText
        setCopyText(text)
        copy(text)
        console.log(text)
        alert(`Texto copiado: ${id}`)
    }



    return (

        <div className="w-full h-full grid grid-cols-3 grid-flow-row px-8 py-10 gap-4">
            {
                // Verificar grid para o numero de cartões não quebrar a página : https://www.youtube.com/watch?v=dqMae44pEVk
                cards.map(card => (
                    <div className="flex justify-center w-96 items-center flex-col h-96 bg-slate-700 text-white text-justify rounded-3xl">
                        <div className="m-5 p-3">
                            <h2 id="title" className="text-2xl text-center my-4" ><strong>{card.title}</strong></h2>
                            <p className={card.id}>{card.content}</p>
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <button className="bg-teal-500 w-40 h-9 rounded-2xl m-auto flex justify-center items-center" onClick={() => {
                                setIdCard(card.id), Copiar(card.id)
                            }}>
                                <i className="material-icons left">attach_file</i> Copiar Texto</button>
                        </div>
                    </div>

                ))
            }
        </div>

    )
}

export default Mensagem