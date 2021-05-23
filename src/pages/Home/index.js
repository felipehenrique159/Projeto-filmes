import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import api from '../../services/api'

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
        <div>
            <h1>Pagina Home</h1>
        </div>

    )
}