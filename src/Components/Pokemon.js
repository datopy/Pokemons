import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


const Pokemon = ({ pokemon }) => {

    return (
        <>
            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>
                <CardImg style={{ width: '10rem' }} src={pokemon.sprites.front_default} variant='top'/>
                <CardBody className={`${pokemon.types[0].type.name} rounded text-white`}> 
                    <CardTitle><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></CardTitle>
                </CardBody>
            </Card>
        </>
    )
}

export default Pokemon;