import React from 'react'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Cartao from './components/modelo/Cartao'
import Numeros from './componentes/Numeros'
import Foto from './componentes/Foto'
import ListaFuncio from './componentes/ListaFuncio'
import image from './images/Tyler.jpg'
import Nome from './componentes/Nome'
import Tarefas from './componentes/Tarefas'
import'./app.css'
export default function App(){
    return(
        <div className='App'>

                <h1>Fundamentos React</h1>
                <div className='Cards'>
                    <Cartao titulo='Lista de tarefas' ><Tarefas/></Cartao>

         <Cartao titulo='Primeiro componente React' color='#F14C3'>
            <Nome/>
        </Cartao>
            <Cartao titulo='Primeiro componente React' color='#F14C3'>
            <Foto img={image}/>
        </Cartao>
       <Cartao titulo="lista funcio" color='#F0DC1'><ListaFuncio/></Cartao>
        <Cartao titulo='teste' color='#B19CD7'> </Cartao>
        <Cartao titulo='Primeiro componente React' color='gray'>
            <Primeiro />
        </Cartao>

        <Cartao titulo='Primeiro componente com props'>
            <Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022'/>
        </Cartao>

        <Cartao titulo='Números aleatórios' color='purple'><Numeros min={10} max={55}/></Cartao>

         <Cartao titulo='Primeiro componente com props 'color='violet'>
            <Comparametro titulo='Aula de React' subtitulo='Parametros' />
            </Cartao>

        <Cartao titulo='Primeiro componente com props'>
            <Comparametro titulo='titulo teste' subtitulo='teste teste'/>
        </Cartao>

        <Cartao titulo='Utilizando React.Fragment'>
            <Fragmento/>
        </Cartao> 
        </div>
    </div>
    )
}