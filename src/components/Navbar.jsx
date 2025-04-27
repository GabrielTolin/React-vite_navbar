import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu"; 
import styles from "../styles/Navbar.module.css" 

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
          <Link to="/">Logo</Link>
        </div>

        {/* Links centralizados */}
        <div className={`${styles.navCenter} ${menuOpen ? styles.mobileHide : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" onClick={closeMenu} className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu} className={styles.navLink}>Sobre</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu} className={styles.navLink}>Contato</Link>
            </li>
          </ul>
        </div>

        {/* CTAs e botão de tema à direita */}
        <div className={`${styles.navRight} ${menuOpen ? styles.mobileHide : ''}`}>
          <div className={styles.ctas}>
            <div className={styles.desktopCtas}>
              <Link to="" className={styles.login}>Login</Link>
              <Link to="" className={styles.signup}>Cadastrar-se</Link>
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
