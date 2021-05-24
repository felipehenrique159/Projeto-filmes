
import loader from '../../assets/loader.gif'

export default function Loader() {
    return(
        <div className="loader">
            <h1 >Carregando seu filme... </h1>
            <img src={loader} alt="" />     
        </div>
    )    
}