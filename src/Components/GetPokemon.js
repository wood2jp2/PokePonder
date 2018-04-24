import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PokemonProfile from './PokemonProfile.js'
import pokemon from 'pokemontcgsdk'

const SubmitForm = styled.section`
    color: blue;

    .input {
        height: 1.9em;
        border-radius: 10%;
        margin-left: 0.4em;
    }

    .submit {
        border-radius: 10%;
        padding: 0.5em;
        margin: 0.5em;
        background-color: #3895C0;
        color: white;
        
    }
`

export default class GetPokemon extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            retrievedPokemon: false,
            searchedPokemon: '',
            name: '',
            weight: '',
            image: ''
        }        
    }

    getPokemon(e) {
        e.preventDefault()

        let searchedPokemon = e.target.pokemonName.value.toLowerCase()

        console.log(pokemon.card.all({ name: `${searchedPokemon}`, pageSize: 1 })
        .on('data', card => {
            console.log(card[0].length)
        }))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
        .then( res => {
            console.log(res)
            this.setState(() => ({
                name: res.data.name,
                weight: res.data.weight,
                searchedPokemon: searchedPokemon,
                retrievedPokemon: true,
                image: res.data.sprites.front_shiny
            }))
        })
        .catch(function (err) {
            console.log(err)
        })

    }

    render() {

        const submitForm = (
        <SubmitForm><form
            onSubmit={e => this.getPokemon(e)}>
                <label>
                {this.props.second ? 'Second' : 'First'} Pokemon: 
                <input className='input' type="text" name="pokemonName" />
                </label>
                <input className='submit' type="submit" value="Submit" />
                </form></SubmitForm>)

        return (
        <div>
            {!this.state.retrievedPokemon && submitForm}
            {this.state.retrievedPokemon && <PokemonProfile image={this.state.image} name={this.state.name} weight={this.state.weight}/>}
            {!this.props.second && <GetPokemon second={true}/>}
        </div>
        )
    }
}