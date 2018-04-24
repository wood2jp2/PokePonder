import React from 'react'

const PokemonProfile = props => (

    <div>
        <h1>Name: {props.name}</h1>
        <h3>Weight: {props.weight}lbs</h3>
        <img src={props.image} />
    </div>
)

export default PokemonProfile