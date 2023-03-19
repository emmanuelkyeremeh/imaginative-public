import styles from "../styles/login.module.css";
import { useState } from "react";

const login = () => {
  const [login, setlogin] = useState(true);
  return (
    <div className={styles.login_container}>
      <form className={styles.login_form}>
        <div className={styles.formItem_heading}>
          <h3>{login ? "Login" : "Sign up"}</h3>
        </div>
        {!login && (
          <div className={styles.formItem}>
            <h4>Your name</h4>
            <input type="text" name="name" id="" />
          </div>
        )}
        <div className={styles.formItem}>
          <h4>Your email</h4>
          <input type="email" name="email" id="" />
        </div>
        <div className={styles.formItem}>
          <h4>Your password</h4>
          <div className={styles.formItem_item}>
            <input type="password" name="password" id="" />
          </div>
        </div>
        {!login && (
          <div className={styles.formItem}>
            <h4>Confirm your password</h4>
            <input type="password" name="passwordConfirm" id="" />
          </div>
        )}
        <div className={styles.formItem}>
          <button type="submit" className={styles.formItem_button}>
            Continue
          </button>
        </div>

        <p>
          Not Registered ? <span onClick={() => setlogin(!login)}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default login;
