import React from 'react'
import styled from 'styled-components'
import logo from '../../public/images/pokemonHeader.jpg' 

const HeaderWrap = styled.header`
    background-image: url(${logo});
    color: white;
`

const Header = props => (
    <div>
    <HeaderWrap>
        <h1>PokePonder</h1>
        <h3>Your favorite hub for all of your Pokemon information</h3>
    </HeaderWrap>
    </div>
)

export default Header