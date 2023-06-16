import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, getTypes, postPokemon } from "../actions";
import "./PokemonCreate.css";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.hp]: e.target.value,
      [e.target.attack]: e.target.value,
      [e.target.defense]: e.target.value,
      [e.target.speed]: e.target.value,
      [e.target.height]: e.target.value,
      [e.target.weight]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types:
        input.types.length < 2
          ? input.types.includes(e.target.value)
            ? input.types
            : [...input.types, e.target.value]
          : input.types,
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name.trim() === "") {
      return alert("Debe ingresar un nombre.");
    } else if (
      pokemons.find(
        (e) => e.name.toLowerCase().trim() === input.name.toLowerCase().trim()
      )
    ) {
      return alert(`El nombre ${input.name} ya existe.`);
    } else if (input.hp.trim() === "" || input.hp < 1 || input.hp > 100) {
      return alert("Coloca un Puntaje de Vida entre 1 a 100.");
    } else if (
      input.attack.trim() === "" ||
      input.attack < 1 ||
      input.attack > 100
    ) {
      return alert("Coloca un Puntaje de Ataque entre 1 a 100.");
    } else if (
      input.defense.trim() === "" ||
      input.defense < 1 ||
      input.defense > 100
    ) {
      return alert("Coloca un Puntaje de Defensa entre 1 a 100.");
    } else if (
      input.speed.trim() === "" ||
      input.speed < 1 ||
      input.speed > 100
    ) {
      return alert("Coloca un Puntaje de Velocidad entre 1 a 100.");
    } else if (
      input.height.trim() === "" ||
      input.height < 0.1 ||
      input.height > 20
    ) {
      return alert("Coloca un Puntaje de Altura (en metros) entre 0.1 a 20.");
    } else if (
      input.weight.trim() === "" ||
      input.weight < 0.1 ||
      input.weight > 1000
    ) {
      return alert(
        "Coloca un Puntaje de Peso (en kilogramos) entre 0.1 a 1000."
      );
    } else if (input.types.length === 0) {
      return alert("Selecciona uno o más Tipos.");
    } else {
      console.log("AQUI: ", input);
      dispatch(postPokemon(input));
      alert("Videojuego creado con exito!!");
      setInput({
        name: "",
        image: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
      });
      document.getElementById("formulario").reset();
    }
  }

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="fondoCreate">
      <div className="formLogo">
        <img
          className="imageForm"
          src="https://images.wikidexcdn.net/mwuploads/wikidex/4/46/latest/20130917005914/Pok%C3%A9mon_Gotta_catch_em_all_logo.png"
          alt=""
        />
      </div>
      <div className="formCreate">
        <form
          id="formulario"
          className="row g-3 bg-warning rounded-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={input.name}
              placeholder="Pokemon name..."
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={input.image}
              name="image"
              placeholder="URL"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault03" className="form-label">
              Hp
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              value={input.hp}
              name="hp"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault04" className="form-label">
              Attack
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault04"
              value={input.attack}
              name="attack"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault05" className="form-label">
              Defense
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              value={input.defense}
              name="defense"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault06" className="form-label">
              Speed
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault06"
              value={input.speed}
              name="speed"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault07" className="form-label">
              Height
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault07"
              value={input.height}
              name="height"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault08" className="form-label">
              Weight
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault08"
              value={input.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault09" className="form-label">
              Types (max 2)
            </label>
            <select
              className="form-select"
              id="validationDefault09"
              defaultValue="Choose"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled value="Choose">
                Choose...
              </option>
              {types?.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="listaUl">
              <br />
              <ul className="list-group align-items-center">
                <li className="list ps-2 pt-1 pb-1 bg-white">
                  {input.types?.map((t) => (
                    <div key={t}>
                      {t + " "}
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm buttonClose me-2"
                        onClick={() => handleDelete(t)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="botones">
            <div className="col-6 d-flex justify-content-center">
              <button className="btn btn-light" type="submit">
                Create Pokemon ✓
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <Link to={"/home"}>
                <button type="button" className="btn btn-light">
                  ◁ Volver
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
