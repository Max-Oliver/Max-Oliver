import React, { Fragment, useState, useEffect } from "react";
import "./form.scss";
import { CustomButton } from "../button/index";
import { validarCedula } from "./logic/logica";
import { dptosLocs } from "./logic/datos";
import { useForm } from "react-hook-form";

export const Form = () => {
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    departamento: "Montevideo",
    localidad: "Montevideo",
    cedula: "",
    checkbox: false,
  });

  const { handleSubmit, register, errors } = useForm({
    reValidateMode: "onChange",
  });
  const [departamentos, setDepartamentos] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [validCI, setValidCI] = useState({
    name: "",
    valid: false,
    value: "",
  });
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

  const handleInputChange = ({ name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const checkValidCI = ({ name, value }) => {
    if (name === "cedula") {
      let isValid = validarCedula(value);
      console.log(`Validando CI -> ${value} es ${isValid}`);
      if (isValid) {
        setValidCI({
          name: name,
          value: String(value),
          valid: isValid,
        });
        console.log(`Se guardara -> ${name} ${value} es ${isValid}`);
        handleInputChange(validCI.name, validCI.value);
      }
    }
  };

  const onSubmit = async (event) => {
    await 1000;
    console.log("Este es el form: ", { ...state });
  };

  return (
    <Fragment>
      <div className="container__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fullname__container">
            {/* Nombre */}
            <div className="name__container">
              <label htmlFor="nombre"></label>
              <input
                style={{
                  border: errors.nombre ? "1px solid red" : "1px solid gray",
                }}
                className="name__input"
                type="text"
                name="nombre"
                ref={register({
                  required: { value: true, message: "El campo es obligatorio" },
                  minLength: {
                    value: 2,
                    message: "El el debe tener minimo dos caracteres",
                  },
                })}
                placeholder="Nombre"
                onChange={(event) => handleInputChange(event.target)}
              />
              {errors.nombre && errors.nombre?.type === "required" && (
                <p className="error_message_right">Este campo es oblicatorio</p>
              )}
              {errors.nombre && errors.nombre?.type === "minLength" && (
                <p className="error_message_right">
                  El nombre debe contener minimo dos caracteres
                </p>
              )}
            </div>

            {/* Apellido */}
            <div className="apellido__container">
              <label htmlFor="apellido"></label>
              <input
                style={{
                  border: errors.apellido ? "1px solid red" : "1px solid gray",
                }}
                className="apellido__input"
                type="text"
                name="apellido"
                ref={register({
                  required: true,
                  minLength: 2,
                  message: "El apellido debe tener minimo dos caracteres",
                })}
                placeholder="Apellido"
                onChange={(event) => handleInputChange(event.target)}
              />
              {errors.apellido && errors.apellido?.type === "required" && (
                <p className="error_message_right">Este campo es oblicatorio</p>
              )}
              {errors.apellido && errors.apellido?.type === "minLength" && (
                <p className="error_message_right">
                  El apellido debe tener minimo dos caracteres
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="email__input">
            <label htmlFor="email"></label>
            <input
              style={{
                border: errors.email ? "1px solid red" : "1px solid gray",
              }}
              name="email"
              type="text"
              placeholder="Email"
              ref={register({
                required: { value: true, message: "Este campo es oblicatorio" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Correo invalido",
                },
              })}
              onChange={(event) => handleInputChange(event.target)}
            />
          </div>
          {errors.email && errors.email?.type === "required" && (
            <p className="error_message_left">Este campo es oblicatorio</p>
          )}
          {errors.email && errors.email?.type === "pattern" && (
            <p className="error_message_left">
              El correo ingresado no es valido
            </p>
          )}

          <div className="zones__container">
            {/* Departamento */}
            <div className="departamento__container">
              <label htmlFor="departamento"></label>
              <select
                name="departamento"
                value={state.departamento}
                onChange={(event) => handleInputChange(event.target)}
              >
                {departamentos.map((dept, i) => {
                  return dept != "" ? (
                    <option key={i} value={dept}>
                      {dept}
                    </option>
                  ) : null;
                })}
              </select>
            </div>

            {/* Localidad */}
            <div className="localidad__container">
              <label htmlFor="localidad"></label>
              <select
                name="localidad"
                value={state.localidad}
                onChange={(event) => handleInputChange(event.target)}
              >
                {localidades.map((localidad, i) => {
                  return localidad != "" ? (
                    <option key={i} value={localidad}>
                      {localidad}
                    </option>
                  ) : null;
                })}
              </select>
            </div>
          </div>

          <div className="CI__and__checkbox__container">
            <div className="cedula__container">
              <label htmlFor="cedula"></label>
              <input
                style={{
                  border: errors.cedula ? "1px solid red" : "1px solid gray",
                }}
                className="cedula__input"
                type="text"
                name="cedula"
                placeholder="C.I"
                ref={register({
                  required: { value: true, message: "Este campo es requerido" },
                  validate: validCI ? true : false,
                })}
                //TODO: Revisar cedula no se esnvia en el onSubmit log
                onChange={(event) => checkValidCI(event.target)}
              />
              {errors.cedula && errors.cedula?.type === "required" && (
                <p className="error_message_left">{errors.cedula.message}</p>
              )}
              {!validCI.valid && (
                <p className="error_message_left">
                  Cedula incorrecta, recuerde solo ingresar numeros.
                </p>
              )}
            </div>
            <div className="checkbox__container">
              <label htmlFor="checkbox"> Acepto las bases y condiciones</label>
              <input
                className="checkbox__input"
                type="checkbox"
                name="checkbox"
                onChange={(event) => handleInputChange(event.target)}
              />
            </div>
          </div>
          <div className="container__button">
            <CustomButton buttonText="ENVIAR" type="submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};
