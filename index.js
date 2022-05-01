const poke_container = document.getElementById("poke-container");

const pokemon_number = 151;

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    return 0;
}

const fetchPokemon = async () => {
    for (let i=0; i<pokemon_number; i++){
        await getPokemon(i+1);
    }
}

fetchPokemon()