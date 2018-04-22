import React from 'react'
import axios from 'axios'
import PokemonProfile from './PokemonProfile.js'

export default class GetPokemon extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            retrievedPokemon: false,
            searchedPokemon: '',
            name: '',
            weight: ''
        }        
    }

    getPokemon(e) {
        e.preventDefault()

        const searchedPokemon = e.target.pokemonName.value

        const self = this

        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
        .then(function (response) {
            self.setState(() => ({
                name: response.data.name,
                weight: response.data.weight,
                searchedPokemon: searchedPokemon,
                retrievedPokemon: true
            }), () => {
                console.log(self.state)
            })
        })
        .catch(function (err) {
            console.log(err)
        })

    }

    render() {
        const submitForm = (<form
            onSubmit={e => this.getPokemon(e)}>
                <label>
                {this.props.second ? 'Second' : 'First'} Pokemon: 
                <input type="text" name="pokemonName" />
                </label>
                <input type="submit" value="Submit" />
                </form>)
        return (
        <div>
            {!this.state.retrievedPokemon && submitForm}
            {this.state.retrievedPokemon && <PokemonProfile name={this.state.name} weight={this.state.weight}/>}
            {!this.props.second && <GetPokemon second={true}/>}
        </div>
        )
    }
}