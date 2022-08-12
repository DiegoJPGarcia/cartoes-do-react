import { useState, useEffect } from 'react'

export default function Tarefas() {
    const [input, setInput] = useState('')
    const [tarefas, setTarefas] = useState(['estudar javascript',])/**essa é uma array ou variavel composta que recebe varios valores */

    useEffect(()=>{localStorage.setItem('@tarefa',JSON.stringify)},[tarefas])/*o {} é a ação a ser feita e o [] a situação para que o loop aconteça e localstortage é um "cache"*/

    function registrar(event) {
        event.preventDefault()
        setTarefas([...tarefas, input])
        setInput('')
    }



    return (

        <div>
            <h2>Tarefas</h2>
            <form onSubmit={registrar} >

                <label>Nome da tarefa:</label>
                <input placeholder='Digite uma tarefa' value={input} onChange={(event) => setInput(event.target.value)} /><br />
                <button type="submit">Registrar</button>
            </form>
            <div>
                <ul>
                    {tarefas.map(tarefa => (<li key={tarefa}>{tarefa}</li>))}
                </ul>
            </div>
        </div>
    )
}
