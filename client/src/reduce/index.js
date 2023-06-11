const initialState = {
  pokemons: [],
};

function rootReduce(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
  }
}

export default rootReduce;
