import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './home.css'
export default function Home() {

    const [filmes, setFilmes] = useState([])

    const url = 'r-api/?api=filmes/'

   
    useEffect(()=>{

        async function getApiFilmes() {
            const res = await api.get(url)
            setFilmes(res.data)
            console.log(res.data);
        }

        getApiFilmes()

     },[])

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt="capa filme" />
                            <Link to="/">Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )
}