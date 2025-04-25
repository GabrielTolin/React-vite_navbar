// src/components/MobileMenu.jsx
import React from "react";
import styles from "../styles/MobileMenu.module.css";
import { Link } from "react-router-dom";

const MobileMenu = ({ closeMenu }) => {
  return (

    <>
    <div className={styles.overlay} onClick={closeMenu}></div>

    <div className={styles.mobileMenu}>
      <button className={styles.closeButton} onClick={closeMenu}>
        &times;
      </button>

      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contacto">Contato</Link></li>
      </ul>

      <div className={styles.menuCtas}>
        <a href="#" className={styles.login} onClick={closeMenu}>Login</a>
        <a href="#" className={styles.signup} onClick={closeMenu}>Cadastrar-se</a>
      </div>
    </div>

    </>
  );
};

export default MobileMenu;
