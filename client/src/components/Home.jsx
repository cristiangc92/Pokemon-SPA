import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filterPokemonsByType,
  filterCreated,
  orderByName,
  orderByAttack,
} from "../actions";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = allPokemons?.slice(
    indexOfFirstPokemons,
    indexOfLastPokemons
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons())
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [dispatch]);

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  const [orden, setOrden] = useState("");

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  return (
    <div className="fondoHome">
      <nav className="navbar navbar-expand-lg bg-danger p-0 z-1 position-fixed">
        <div className="container-fluid">
          <img
            className="logoContainerFluid"
            src="https://images.wikidexcdn.net/mwuploads/wikidex/4/46/latest/20130917005914/Pok%C3%A9mon_Gotta_catch_em_all_logo.png"
            alt=""
          />
          <button
            className="navbar-toggler ps-5 pe-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img
            className="logo2ContainerFluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
            alt=""
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
              <li className="nav-item">
                <a href="/home">
                  <img
                    className="logoNavbar"
                    src="https://images.wikidexcdn.net/mwuploads/wikidex/4/46/latest/20130917005914/Pok%C3%A9mon_Gotta_catch_em_all_logo.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/pokemons"}>
                  <button type="button" className="btn btn-light buttonCrear">
                    Create Pokemon
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  defaultValue="Types"
                  onChange={(e) => handleFilterType(e)}
                >
                  <option>Types</option>
                  <option value="All">All</option>
                  {allTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  defaultValue="Origin"
                  onChange={(e) => handleFilterCreated(e)}
                >
                  <option>Origin</option>
                  <option value="All">All</option>
                  <option value="created">Created</option>
                  <option value="api">Api</option>
                </select>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  defaultValue="Order"
                  onChange={(e) => handleSort(e)}
                >
                  <option>Order</option>
                  <option value="asc">A to Z</option>
                  <option value="desc">Z to A</option>
                </select>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  defaultValue="Attack"
                  onChange={(e) => handleSort2(e)}
                >
                  <option>Attack</option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </select>
              </li>
              <li className="nav-item">
                <SearchBar />
              </li>
              <li className="nav-item">
                <img
                  className="logoNavbar"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="contenedorPrincipal">
        {error ? (
          <div>
            <h1>{error}</h1>
          </div>
        ) : loading ? (
          <div className="loadingFlex">
            <div
              className="spinner-grow bg-warning"
              style={{ width: "10rem", height: "10rem" }}
              role="status"
            >
              <img
                className="logoNavbar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="cards-container">
              {currentPokemons?.map((p) => {
                return (
                  <div key={p.id}>
                    <Link to={"/home/" + p.id} key={p.id} className="link2">
                      <Card
                        key={p.id}
                        image={p.image}
                        name={p.name}
                        types={p.types}
                        attack={p.attack}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="paginado-container">
              <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
