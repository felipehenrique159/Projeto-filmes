import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './favoritos.css';
import {toast} from 'react-toastify'
export default function Favoritos() { 
    const [filmes,setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function handlerDelete(id) { 
        
        let filtroFilmes = filmes.filter((filme) =>{
            return (filme.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes',JSON.stringify(filtroFilmes))
        toast.info('Filme Excluído com sucesso')
     }
    

    return(
        <div id="meus-filmes">
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                        <span>{filme.nome}</span>

                        <div>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={() => handlerDelete(filme.id)}>Excluir</button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
 }
