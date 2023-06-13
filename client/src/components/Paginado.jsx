import React from "react";

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="pb-3" aria-label="Page navigation example">
      <ul className="pagination pagination-lg justify-content-center mt-5">
        {pageNumbers?.map((number) => (
          <li className="page-item" key={number}>
            <a
              className="page-link bg-danger text-white fw-bold"
              onClick={() => paginado(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
