import React from "react";

import copy from "copy-to-clipboard";

const Mensagem = (props) => {

    return (
        <div className="w-full h-full grid grid-cols-3 grid-flow-row px-8 py-10 gap-4">
            <div className="flex justify-center w-[400px] items-center flex-col h-96 bg-slate-700 text-white text-justify rounded-3xl">
                <div className="m-5 p-3">
                    <h2 id="title" className="text-2xl text-center my-4" ><strong>{props.title}</strong></h2>
                    <p className={props.id}>{props.content}</p>
                </div>
                <div className="flex justify-center items-center my-3">
                    <button className="bg-teal-500 w-40 h-9 rounded-2xl m-auto flex justify-center items-center" onClick={() => {
                        copy(props.content)
                        alert('Texto copiado')
                    }}>
                        <i className="material-icons left">attach_file</i> Copiar Texto</button>
                </div>
            </div>
        </div>

    )
}

export default Mensagem