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
        <div className="fullname__container">
          <div className="name__container">
            <label htmlFor="nombre"></label>
            <input
              className="name__input"
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={(event) => valueToState(event.target)}
            />
          </div>
          <div className="apellido__container">
            <label htmlFor="apellido"></label>
            <input
              className="apellido__input"
              type="text"
              name="apellido"
              placeholder="Apellido"
              onChange={(event) => valueToState(event.target)}
            />
          </div>
        </div>

        <label htmlFor="email"></label>
        <input
          className="email__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => valueToState(event.target)}
        />

        <div className="zones__container">
          <div className="departamento__container">
            <label htmlFor="departamento"></label>
            <select
              name="departamento"
              onChange={(event) => valueToState(event.target)}
            >
              {departamentos.map((dept) => {
                return <option value={dept}>{dept}</option>;
              })}
            </select>
          </div>
          <div className="localidad__container">
            <label htmlFor="localidad"></label>
            <select
              name="localidad"
              placeholder="localidad"
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
          </div>
        </div>

        <div className="CI__and__checkbox__container">
          <div className="cedula__container">
            <label htmlFor="cedula"></label>
            <input
              className="cedula__input"
              type="text"
              name="cedula"
              placeholder="Cedula"
              onChange={(event) => valueToState(event.target)}
            />
          </div>
          <div className="checkbox__container">
            <label htmlFor="checkbox"> Acepto las bases y condiciones</label>
            <input
              className="checkbox__input"
              type="checkbox"
              name="checkbox"
              onChange={(event) => valueToState(event.target)}
            />
          </div>
        </div>
        <div className="container__button">
          <CustomButton buttonText="ENVIAR" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};
