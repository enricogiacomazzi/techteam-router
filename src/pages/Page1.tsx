import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result, getPokemons, getPokemonByName, Pokemon } from "../api";

export const Page1: React.FC = () => {
    const params = useParams();

    //http://sito.com?id=23&sort=price

    const [pokemon, setPokemon] = useState<Pokemon | undefined>();

    useEffect(() => {
        if(!!params.name) {
            getPokemonByName(params.name).then(p => setPokemon(p));
        }
    }, [params]);

    if(!pokemon) {
        return <h1>...</h1>
    }

    return (
        <>
            <div>{pokemon.name}</div>
            <div>{pokemon.weight}</div>
            <div>{pokemon.height}</div>
            <div>{pokemon.id}</div>
        </>
    )
}


