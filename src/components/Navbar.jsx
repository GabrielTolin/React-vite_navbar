import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu"; 
import styles from "../styles/Navbar.module.css"
import logo from '../img/logo.png' 

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <img src={logo} alt="Logo" />
        </div>

        {/* Links centralizados */}
        <div className={`${styles.navCenter} ${menuOpen ? styles.mobileHide : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink to="/" aria-label="Ir para a página Home" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink }> Home </NavLink>
            </li>
            
            <li>
              <NavLink to="/sobre" aria-label="Ir para a página Sobre" onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Sobre</NavLink>
            </li>
            
            <li>
              <NavLink to="/contacto" onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contato</NavLink>
            </li>
          </ul>
        </div>

        {/* CTAs e botão de tema à direita */}
        <div className={`${styles.navRight} ${menuOpen ? styles.mobileHide : ''}`}>
          <div className={styles.ctas}>
            <div className={styles.desktopCtas}>
              <NavLink to="" className={styles.login}>Login</NavLink>
              <NavLink to="" className={styles.signup}>Cadastrar-se</NavLink>
            </div>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label={`Mudar para tema ${currentTheme === "light" ? "escuro" : "claro"}`}
            >
              {currentTheme === "light" ? "🌙" : "☀️"}
            </button>
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
