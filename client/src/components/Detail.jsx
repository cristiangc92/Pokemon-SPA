import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, vaciarDetail } from "../actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return function () {
      dispatch(vaciarDetail());
    };
  }, [dispatch, id]);

  const myPokemon = useSelector((state) => state.detail);

  return (
    <div className="fondoDetail">
      {myPokemon ? (
        <div className="contenedorDetail">
          <h1 className="titulo">{myPokemon.name}</h1>
          <div className="containerFlex">
            <div className="contenedorImagen">
              <img className="imageDetail" src={myPokemon.image} alt="" />
            </div>
            <div className="contenedorInfo">
              <h3>
                <span>Heal Point:</span> {myPokemon.hp}
              </h3>
              <h3>
                <span>Attack Point:</span> {myPokemon.attack}
              </h3>
              <h3>
                <span>Deffense Point:</span> {myPokemon.defense}
              </h3>
              <h3>
                <span>Speed Point:</span> {myPokemon.speed}
              </h3>
              <h3>
                <span>Height Point:</span> {myPokemon.height}
              </h3>
              <h3>
                <span>Weight Point:</span> {myPokemon.weight}
              </h3>
            </div>
          </div>
          <Link to={"/home"}>
            <button type="button" className="btn btn-light">
              ◁ Volver
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
