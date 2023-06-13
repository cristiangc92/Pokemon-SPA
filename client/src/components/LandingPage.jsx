import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="contenedorLanding">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Logo pokemon"
      />
      <Link to="/home">
        <button type="button" className="btn btn-danger btn-lg fw-bold">
          INGRESAR
        </button>
      </Link>
    </div>
  );
}
