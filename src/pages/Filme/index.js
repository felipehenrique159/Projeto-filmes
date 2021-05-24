import {useParams,useHistory} from 'react-router-dom'
import './filme.css'
import api from '../../services/api'
import { useEffect,useState } from 'react'
import {FiStar} from 'react-icons/fi'
export default function Filme(){

    const {id} = useParams()
    const history = useHistory()
    const [filme,setFilme] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function getFilme(){
            const res = await api.get(`r-api/?api=filmes/${id}`)
            if(res.data.length === 0){
                history.replace('/')
                return
            }       
                setFilme(res.data)
                setLoading(false)       
            }
        getFilme()
    },[history,id])

    if(loading){
        return(
            <h1 className="filme-info">Carregando seu filme...</h1>           
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt="" />
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>

            <div className="botoes">
                
                <button onClick={()=>{}}> <span><FiStar/></span> Favoritar filme</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Assistir Trailler</a>
                </button>
            </div>
        </div>
    )
}