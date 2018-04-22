import React from 'react'

const PokemonProfile = props => (

    <div>
        <h1>Name: {props.name}</h1>
        <h3>Weight: {props.weight}lbs</h3>
    </div>
)

export default PokemonProfile