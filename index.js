const poke_container = document.getElementById("poke-container");

const pokemon_number = 151;

const fetchPokemon = async () => {
    for (let i=0; i<pokemon_number; i++){
        await getPokemon(i+1);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    return 0;
}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const pokeInnerHtml = `${pokemon.id}`;
    pokemonEl.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEl)
}

window.addEventListener('load', fetchPokemon)