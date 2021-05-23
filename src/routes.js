import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Filme from './pages/Filme'
import Header from './components/Header'

export default function Routes(){
    return(
        <BrowserRouter>
           <Header/>
           <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/filme/:id" component={Filme} exact/>
                {/* <Route path="*" component={Filme} exact/> */}
           </Switch>
        </BrowserRouter>
    )
}