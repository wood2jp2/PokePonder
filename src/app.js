import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from './Components/Header'
import GetPokemon from './Components/GetPokemon'

const PageNotFound = () => (
    <div>Page Not Found</div>
)

const routes = (
    <Router>
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={GetPokemon} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'))

