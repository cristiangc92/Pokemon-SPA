import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Debe ingresar un nombre");
    } else {
      dispatch(getNamePokemons(name));
      setName("");
      document.getElementById("search").value = "";
    }
  }

  return (
    <form className="d-flex flex-column" role="search">
      <input
        id="search"
        className="form-control mb-1"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn btn-light"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        🔍
      </button>
    </form>
  );
}
