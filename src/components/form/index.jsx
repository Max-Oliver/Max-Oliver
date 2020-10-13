import React, { useState, useEffect } from "react";
import "./form.scss";
import { CustomButton } from "../button/index";
import validarCedula from "./logic/logica";
import { dptosLocs } from "./logic/datos";

export const Form = () => {
  let defaultState = {
    nombre: "",
    appellido: "",
    email: "",
    description: "",
    localidad: "",
    cedula: undefined,
    checkbox: false,
  };
  const [state, setState] = useState(defaultState);
  const [departamentos, setDepartamentos] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const { Artigas, Canelones, Montevideo, Salto } = dptosLocs;

  useEffect(() => {
    setLocs();
    setDeps();
  }, []);

  const setLocs = () => {
    let locsArray = [];
    locsArray.push(...Artigas);
    locsArray.push(...Canelones);
    locsArray.push(...Montevideo);
    locsArray.push(...Salto);

    setLocalidades((prev) => {
      return [prev, ...locsArray];
    });
  };

  const setDeps = () => {
    let depsArray = [];
    depsArray.push(Artigas[0]);
    depsArray.push(Canelones[0]);
    depsArray.push(Montevideo[0]);
    depsArray.push(Salto[0]);

    setDepartamentos((prev) => {
      return [prev, ...depsArray];
    });
  };

  const valueToState = ({ name, value, checked, type }) => {
    setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <div className="container__form">
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          className="name__input"
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={(event) => valueToState(event.target)}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          className="apellido__input"
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={(event) => valueToState(event.target)}
        />
        <label htmlFor="email">E-Mail:</label>
        <input
          className="email__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => valueToState(event.target)}
        />
        <label htmlFor="departamento">Departamento:</label>
        <select
          name="departamento"
          onChange={(event) => valueToState(event.target)}
        >
          {departamentos.map((dept) => {
            return <option value={dept}>{dept}</option>;
          })}
        </select>

        <label htmlFor="localidad">Localidad:</label>
        <select
          name="localidad"
          onChange={(event) => valueToState(event.target)}
        >
          {localidades.map((localidad, i) => {
            return (
              <option key={i} placeholder="Localidad" value={localidad}>
                {localidad}
              </option>
            );
          })}
        </select>
        <label htmlFor="cedula">C.I.:</label>
        <input
          className="cedula__input"
          type="text"
          name="cedula"
          placeholder="Cedula"
          onChange={(event) => valueToState(event.target)}
        />
        <label htmlFor="checkbox"> Acepto las bases y condiciones</label>
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          onChange={(event) => valueToState(event.target)}
        />
        <div className="container__button">
          <CustomButton buttonText="ENVIAR" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};
