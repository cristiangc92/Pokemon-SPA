const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
};

function rootReduce(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };

    case "FILTER_BY_TYPE":
      const allPokemons = state.allPokemons;
      const typesFiltered =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((p) => p.types?.includes(action.payload));
      return {
        ...state,
        pokemons: typesFiltered,
      };

    case "FILTER_CREATED":
      const allPokemons2 = state.allPokemons;
      const createdFilter =
        action.payload === "created"
          ? allPokemons2.filter((v) => v.createdInDb === true)
          : allPokemons2.filter((v) => v.createdInDb !== true);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : createdFilter,
      };

    case "ORDER_BY_NAME":
      const sortedArrName =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedArrName,
      };

    case "ORDER_BY_ATTACK":
      const sortedArrAttack =
        action.payload === "low"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : action.payload === "high"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : state.pokemons;
      return {
        ...state,
        pokemons: sortedArrAttack,
      };

    case "GET_NAME_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

export default rootReduce;
