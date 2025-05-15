import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MobileMenu.module.css";
import { useTranslation } from 'react-i18next';
import ptFlag from '../img/pt.svg';
import gbFlag from '../img/gb.svg';
import i18n from '../i18n';

const MobileMenu = ({ isOpen, closeMenu, toggleTheme, currentTheme }) => {
  const { t } = useTranslation();
  const isDark = currentTheme === "dark";

  return (
    <>
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        />
      )}

      <nav 
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''} ${isDark ? styles.darkMenu : ''}`}
      >
       
        <div className={styles.navLinks}>
          <Link to="/" onClick={closeMenu} className={styles.navLink}>{t("home")}</Link>
          <Link to="/sobre" onClick={closeMenu} className={styles.navLink}>{t("about")}</Link>
          <Link to="/contacto" onClick={closeMenu} className={styles.navLink}>{t("contacto")}</Link>
        </div>

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
          <Link to="/login" onClick={closeMenu} className={styles.login}>{t("login")}</Link>
          <Link to="/cadastro" onClick={closeMenu} className={styles.signup}>{t("cadastre")}</Link>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
