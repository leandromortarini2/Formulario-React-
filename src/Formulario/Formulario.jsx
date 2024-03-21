/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserSlice } from "../Redux/userSlice";
import styles from "../Formulario/Formulario.module.css";
import CardMsj from "../CardMsj/CardMsj";
import validate from "../helpers/validaciones";

const Formulario = () => {
  const [Errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const [usuarioState, setusuarioState] = useState({
    name: "",
    lastname: "",
    email: "",
    edad: "",
    msj: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setusuarioState({
      ...usuarioState,
      [name]: value,
    });
    setErrors(validate({ ...usuarioState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUserSlice(usuarioState));
  };

  return (
    <>
      <div className={styles.container}>
        <h1>FORMULARIO</h1>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            name="name"
            placeholder="nombre"
            value={usuarioState.name}
            onChange={handleInputChange}
          />
          <p className={styles.Errors}>{Errors.name ? Errors.name : null}</p>
          <label htmlFor="lastname">Apellido: </label>
          <input
            type="text"
            name="lastname"
            placeholder="apellido"
            onChange={handleInputChange}
            value={usuarioState.lastname}
          />
          <p className={styles.Errors}>
            {Errors.lastname ? Errors.lastname : null}{" "}
          </p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="correo@gmail.com"
            value={usuarioState.email}
            onChange={handleInputChange}
          />
          <p className={styles.Errors}>{Errors.email ? Errors.email : null} </p>
          <label htmlFor="edad">Edad: </label>
          <select
            name="edad"
            onChange={handleInputChange}
            value={usuarioState.edad}
          >
            <option value="18 - 25">seleccione edad</option>
            <option value="18 - 25">entre 18 - 25 años</option>
            <option value="26 - 35">entre 26 - 35 años</option>
            <option value="36 - 45">entre 36 - 45años</option>
            <option value="46 o mas ">46 o mas</option>
          </select>
          <p className={styles.Errors}>{Errors.edad ? Errors.edad : null} </p>
          <label htmlFor="msj">Mensaje: </label>
          <textarea
            name="msj"
            id=""
            cols="30"
            rows="10"
            placeholder="Deja tu mensaje aqui..."
            onChange={handleInputChange}
            value={usuarioState.msj}
          ></textarea>
          <p className={styles.Errors}>{Errors.msj ? Errors.msj : null} </p>
          <button type="submit">Enviar</button>
        </form>
        <CardMsj />
      </div>
    </>
  );
};

export default Formulario;
