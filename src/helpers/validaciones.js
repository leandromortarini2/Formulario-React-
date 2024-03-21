/* eslint-disable no-unused-vars */
const validate = (input) => {
  const errors = {};
  if (!input.name) {
    errors.name = "Ingrese su nombre";
  } else {
    if (input.name.length <= 3)
      errors.name = "El nombre debe tener minimo 4 caracteres";
    if (input.name.length >= 10)
      errors.name = "El nombre debe tener maximo 9 caracteres";
  }

  if (!input.lastname) errors.lastname = "Ingrese su apellido";

  if (!input.email) errors.email = "Ingrese un correo electronico";

  if (!input.edad) errors.edad = "Seleccione su edad";

  if (!input.msj) errors.msj = "Dejenos un comentario";
  return errors;
};

export default validate;
