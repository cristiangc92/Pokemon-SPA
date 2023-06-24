const { Router } = require("express");
const getAllPokemons = require("../controllers/pokemonsController");
const { validate: uuidValidate } = require("uuid");
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const pokemonsTotal = await getAllPokemons();
    if (name) {
      const pokemonName = pokemonsTotal.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      pokemonName.length
        ? res.status(200).send(pokemonName)
        : res.status(404).send("No se encuentra el pokemon buscado por nombre");
    } else {
      res.status(200).send(pokemonsTotal);
    }
  } catch (error) {
    console.log("Error en la ruta get /pokemons: ", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!uuidValidate(id)) {
      const pokemonId = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const pokemonInfo = {
        id: pokemonId.data.id,
        name: pokemonId.data.name,
        image: pokemonId.data.sprites.other["official-artwork"].front_default,
        hp: pokemonId.data.stats[0].base_stat,
        attack: pokemonId.data.stats[1].base_stat,
        defense: pokemonId.data.stats[2].base_stat,
        speed: pokemonId.data.stats[5].base_stat,
        height: pokemonId.data.height,
        weight: pokemonId.data.weight,
        types: pokemonId.data.types.map((t) => t.type.name),
      };
      pokemonInfo
        ? res.status(200).send(pokemonInfo)
        : res.status(404).send("No existe el ID en la API!!");
    } else {
      const pokemonDb = await Pokemon.findByPk(id, {
        include: Type,
      });
      const pokemonIdDb = {
        id: pokemonDb.id,
        name: pokemonDb.name,
        image: pokemonDb.image,
        hp: pokemonDb.hp,
        attack: pokemonDb.attack,
        defense: pokemonDb.defense,
        speed: pokemonDb.speed,
        height: pokemonDb.height,
        weight: pokemonDb.weight,
        types: pokemonDb.types,
        createdInDb: pokemonDb.createdInDb,
      };
      pokemonIdDb
        ? res.status(200).send(pokemonIdDb)
        : res.status(404).send("No existe el ID en la BD!!");
    }
  } catch (error) {
    console.log("Error en la ruta /pokemons/:id: ", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
      createdInDb,
    } = req.body;
    const pokemonCreated = await Pokemon.create({
      name,
      image:
        image ||
        "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb,
    });
    const typesDb = await Type.findAll({
      where: { name: types },
    });
    pokemonCreated.addType(typesDb);
    res.status(200).send("Pokemon creado con exito!");
  } catch (error) {
    console.log("Error en la ruta post /pokemons: ", error);
  }
});

module.exports = router;
