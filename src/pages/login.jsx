import React from "react";
import styles from "../styles/formpages.module.css";
import { useTranslation } from "react-i18next";


const Login = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.pageContainer}>
      <h1>Login</h1>
      <form className={styles.form}>
        <label>E-mail</label>
        <input type="email" placeholder={t("typeEmail")} />

        <label>{t("passWord")}</label>
        <input type="password" placeholder={t("typePassW")} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
