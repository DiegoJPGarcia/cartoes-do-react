import React from "react"
import funcionarios from "../data/funcionarios"
export default(props)=>{
// console.log(funcionarios)
const lista = funcionarios.map((funcionarios)=>{
    return(
        <li key={funcionarios.id}>{funcionarios.id} - {funcionarios.nome}</li>
    )
})

    return(
        <div>
           {lista}
        </div>
    )}