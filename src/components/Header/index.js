
import './header.css'
import {Link} from 'react-router-dom'
import {GiFilmStrip} from 'react-icons/gi'
export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/"><span>Favoritos</span> <GiFilmStrip/> </Link>
        </header>
    )
}