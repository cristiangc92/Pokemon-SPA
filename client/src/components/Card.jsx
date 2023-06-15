import React from "react";
import "./Card.css";

export default function Card({ image, name, types, attack }) {
  return (
    <div className="card" style={{ maxWidth: "22rem" }}>
      <div className="row g-0 text-center">
        <div className="col-md-5">
          <img
            src={image}
            className="img-fluid rounded-start bg-danger"
            alt="..."
          />
        </div>
        <div className="col-md-7 contenedorTexto">
          <div className="card-body">
            <h3 className="card-title text-capitalize">{name}</h3>
            <p className="card-text">Types: {types}</p>
            <p className="card-text">
              <b>Attack: {attack}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
