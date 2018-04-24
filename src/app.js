import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from './Components/Header'
import GetPokemon from './Components/GetPokemon'
import styled from 'styled-components'

const PageNotFound = () => (
    <div>Page Not Found</div>
)

const Wrap = styled.section`
    background-color: #91E177;
    text-align: center;
`

const routes = (
    <Router>
    <div>
    <Wrap>
        <Header />
        <Switch>
            <Route exact path='/' component={GetPokemon} />
            <Route component={PageNotFound} />
        </Switch>
        </Wrap>
    </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'))

