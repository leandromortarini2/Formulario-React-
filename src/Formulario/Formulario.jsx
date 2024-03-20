/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserSlice } from "../Redux/userSlice";
import styles from "../Formulario/Formulario.module.css";
import CardMsj from "../CardMsj/CardMsj";

const Formulario = () => {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUserSlice(usuarioState));
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <h1>FORMULARIO</h1>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            name="name"
            placeholder="nombre"
            value={usuarioState.name}
            onChange={handleInputChange}
          />

          <label htmlFor="lastname">Apellido: </label>
          <input
            type="text"
            name="lastname"
            placeholder="apellido"
            onChange={handleInputChange}
            value={usuarioState.lastname}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="correo@gmail.com"
            value={usuarioState.email}
            onChange={handleInputChange}
          />

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
          <button type="submit">Enviar</button>
        </form>
        <CardMsj />
      </div>
    </>
  );
};

export default Formulario;
