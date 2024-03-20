/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import styles from "../CardMsj/CardMsj.module.css";

const CardMsj = () => {
  const msjUsers = useSelector((state) => state.msjUser.msjUsers);
  console.log("========>", msjUsers);

  return (
    <>
      <div className={styles.container}>
        {msjUsers.length > 0 ? (
          msjUsers.map((user) => (
            <div className={styles.cards} key={user.email}>
              <h3>Mensajes de los Usuarios</h3>
              <p>{user.name}</p>
              <p>{user.lastname}</p>
              <p>{user.email}</p>
              <p>{user.edad}</p>
              <p>{user.msj}</p>
            </div>
          ))
        ) : (
          <p className={styles.ParrafoAviso}>
            Aún no hay turnos agendados para este usuario
          </p>
        )}
      </div>
    </>
  );
};

export default CardMsj;
