import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu"; 
import styles from "../styles/Navbar.module.css"
import logo from '../img/logo.png'
import i18n from '../i18n';
import ptFlag from '../img/pt.svg';
import gbFlag from '../img/gb.svg';
import { useTranslation } from "react-i18next";




const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado do menu
  };

  const closeMenu = () => {
    setMenuOpen(false); // Fecha o menu
  };

  


  return (
    <>
      <nav className={`${styles.navbar} ${currentTheme === 'dark' ? styles.dark : ''}`}>
        {/* Logo à esquerda */}
        <div className={styles.logo}>
          <NavLink to="/" aria-label="Ir para a página Inicial">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Links centralizados */}
        <div className={`${styles.navCenter} ${menuOpen ? styles.mobileHide : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink to="/" aria-label="Ir para a página Inicial" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink }> {t("home")} </NavLink>
            </li>
            
            <li>
              <NavLink to="/sobre" aria-label="Ir para a página Sobre a empresa" onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t("about")}</NavLink>
            </li>
            
            <li>
              <NavLink to="/contacto" aria-label="Ir para a página de contactos" onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t("contacto")}</NavLink>
            </li>
          </ul>
        </div>

        {/* CTAs e botão de tema à direita */}
        <div className={`${styles.navRight} ${menuOpen ? styles.mobileHide : ''}`}>
          <div className={styles.ctas}>
            <div className={styles.desktopCtas}>
              <NavLink to="" aria-label="Fazer o Login no Website" className={styles.login}>{t("login")}</NavLink>
              <NavLink to="" aria-label="Fazer o cadastro no Website" className={styles.signup}>{t("cadastre")}</NavLink>
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

        {/* Menu hambúrguer */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
  <MobileMenu 
    closeMenu={closeMenu} 
    toggleTheme={toggleTheme} 
    currentTheme={currentTheme} 
  />
)}

    </>
  );
};

export default Navbar;
