import POKEMON_TYPE_COLORS from "./constants/pokemonTypeColors";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toUpperCase()];

export { getColorByPokemonType };
