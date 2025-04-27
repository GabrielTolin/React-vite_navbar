import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MobileMenu.module.css";

const MobileMenu = ({ closeMenu, toggleTheme, currentTheme }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        closeMenu();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [closing, closeMenu]);

  // Aqui verificamos se o tema é "dark"
  const isDark = currentTheme === "dark";

  return (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>

      <nav className={`${styles.mobileMenu} ${closing ? styles.slideOut : ""} ${isDark ? styles.darkMenu : ""}`}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Fechar menu">
          &times;
        </button>

        <div className={styles.navLinks}>
          <Link to="/" onClick={handleClose} className={styles.navLink}>Home</Link>
          <Link to="/sobre" onClick={handleClose} className={styles.navLink}>Sobre</Link>
          <Link to="/contacto" onClick={handleClose} className={styles.navLink}>Contato</Link>
        </div>

        {/* Botão para alternar tema */}
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Mudar para tema ${currentTheme === "light" ? "escuro" : "claro"}`}
        >
          {currentTheme === "light" ? "🌙" : "☀️"}
        </button>

        <div className={styles.menuCtas}>
          <Link to="/login" onClick={handleClose} className={styles.login}>Login</Link>
          <Link to="/cadastro" onClick={handleClose} className={styles.signup}>Cadastrar-se</Link>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
