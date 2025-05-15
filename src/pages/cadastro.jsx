import React from "react";
import styles from "../styles/formpages.module.css";
import { useTranslation } from "react-i18next";

const Cadastro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.pageContainer}>
      <h1>{t("signup")}</h1>
      <form className={styles.form}>
        <label>{t("name")}</label>
        <input type="text" placeholder={t("typeName")} />

        <label>{t("email")}</label>
        <input type="email" placeholder={t("typeEmail")} />

        <label>{t("passWord")}</label>
        <input type="password" placeholder={t("createPW")} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
