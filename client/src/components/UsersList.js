import { removeUser } from "../store/slices/userDeleted.slice";
import { useDispatch } from "react-redux/es/exports";
import { motion } from "framer-motion";

const UsersList = ({ users, selectUser }) => {
  const dispatch = useDispatch();

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.ul
      className="userList"
      variants={containerAnimation}
      initial="hidden"
      animate="show"
    >
      {users.map((user) => (
        <motion.li className="card" key={user.id} variants={itemAnimation}>
          <h2 className="card__h2">{user.first_name + " " + user.last_name}</h2>
          <div className="card__info">
            <h4 className="card__info--h4">CORREO</h4>
            <span className="card__info--span">{user.email}</span>
            <h4 className="card__info--h4">CUMPLEAÑOS</h4>
            <span className="card__info--span">
              <i className="bx bx-gift"></i> {user.birthday}
            </span>
          </div>
          <div className="card__button">
            <motion.button
              className="card__button--btn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              type="button"
              onClick={() =>
                dispatch(
                  removeUser(user.id, user.first_name + " " + user.last_name)
                )
              }
            >
              <i className="bx bx-trash"></i>
            </motion.button>
            <motion.button
              className="card__button--btn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              type="button"
              onClick={() => selectUser(user)}
            >
              <i className="bx bx-pencil"></i>
            </motion.button>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default UsersList;
