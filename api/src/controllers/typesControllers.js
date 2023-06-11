const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
  try {
    const typesApi = await axios.get("https://pokeapi.co/api/v2/type");
    const typesTotal = typesApi.data.results.map((t) => t.name);
    typesTotal.forEach((el) => {
      Type.findOrCreate({
        where: { name: el },
      });
    });
  } catch (error) {
    console.log("Error en getTypes: ", error);
  }
};

module.exports = getTypes;
