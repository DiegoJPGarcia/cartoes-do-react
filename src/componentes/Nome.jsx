import React from "react";
import { useState } from "react";
export default function Nome(){
    const[nome, setNome] = useState('B22')
    function trocarnome(){
        setNome('start')
    }
    
    return(
        <>
        <h2>Olá: {}</h2>
        <button onClick={trocarnome}>Trocar nome</button>
        </>
    )
}