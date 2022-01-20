import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

// Components
import Pokemon from '../Components/Pokemon'


const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 20; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
    }




    useEffect(() => {
        getPokemonList();
    }, [])



    return (
        <>
            <Row>
                {pokemon.map( p =>(
                    <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Pokemon pokemon={p.data}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homepage