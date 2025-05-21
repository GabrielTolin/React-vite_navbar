import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import styles from "../styles/Navbar.module.css";
import logo from '../assets/logo.png';
import i18n from '../i18n';
import ptFlag from '../assets/pt.svg';
import gbFlag from '../assets/gb.svg';
import { useTranslation } from "react-i18next";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${currentTheme === 'dark' ? styles.dark : ''}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <NavLink to="/" aria-label="Ir para a página Inicial">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

       
        <div className={`${styles.navCenter} ${menuOpen ? styles.mobileHide : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink 
                to="/" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/sobre" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contacto" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
              >
                {t("contacto")}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`${styles.navRight} ${menuOpen ? styles.mobileHide : ''}`}>
          <div className={styles.ctas}>
            <div className={styles.desktopCtas}>
              <NavLink to="/login" className={styles.login}>{t("login")}</NavLink>
              <NavLink to="/cadastro" className={styles.signup}>{t("cadastre")}</NavLink>
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
                <img src={ptFlag} alt="Português" width="24" />
              </button>
              <button onClick={() => i18n.changeLanguage('en')} aria-label="Switch to English">
                <img src={gbFlag} alt="English" width="24" />
              </button>
            </div>
          </div>
        </div>

        {/* Botão hamburger */}
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Menu Mobile */}
      <MobileMenu 
        isOpen={menuOpen}
        closeMenu={closeMenu}
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
      />
    </>
  );
};

export default Navbar;