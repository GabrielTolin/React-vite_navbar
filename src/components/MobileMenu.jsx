import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MobileMenu.module.css";
import { useTranslation } from 'react-i18next';
import ptFlag from '../img/pt.svg';
import gbFlag from '../img/gb.svg';
import i18n from '../i18n';

const MobileMenu = ({ closeMenu, toggleTheme, currentTheme }) => {
  const [closing, setClosing] = useState(false);
  const { t } = useTranslation();

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
          <Link to="/" onClick={handleClose} className={styles.navLink}>{t("home")}</Link>
          <Link to="/sobre" onClick={handleClose} className={styles.navLink}>{t("about")}</Link>
          <Link to="/contacto" onClick={handleClose} className={styles.navLink}>{t("contacto")}</Link>
        </div>

        {/* Botão para alternar tema */}
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Mudar para tema ${currentTheme === "light" ? "escuro" : "claro"}`}
        >
          {currentTheme === "light" ? "🌙" : "☀️"}
        </button>
        <div className={styles.languageSwitcher}>
          <button onClick={() => i18n.changeLanguage('pt')} aria-label="Mudar para português">
            <img src={ptFlag} alt="Português" />
          </button>
          <button onClick={() => i18n.changeLanguage('en')} aria-label="Switch to English">
            <img src={gbFlag} alt="English" />
          </button>
        </div>

        <div className={styles.menuCtas}>
          <Link to="/login" onClick={handleClose} className={styles.login}>{t("login")}</Link>
          <Link to="/cadastro" onClick={handleClose} className={styles.signup}>{t("cadastre")}</Link>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
