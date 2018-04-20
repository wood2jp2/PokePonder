import React from 'react'
import axios from 'axios'

export default class GetPokemon extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            retrievedPokemon: false,
            
        }        
    }

    getPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon/2')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        return (
        <div>
            <button
                onClick={this.getPokemon}
            >Get Pokemon
            
            </button>

        </div>
        )
    }
}