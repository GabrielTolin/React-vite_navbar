import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${currentTheme === 'dark' ? styles.dark : ''}`}>
      {/* Logo alinhado à esquerda */}
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>

      {/* Links centralizados */}
      <div className={`${styles.navCenter} ${menuOpen ? styles.mobileActive : ''}`}>
        <ul className={styles.navLinks}>
          <li>
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className={styles.navLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              onClick={() => setMenuOpen(false)}
              className={styles.navLink}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/contacto" 
              onClick={() => setMenuOpen(false)}
              className={styles.navLink}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* CTAs e botão de tema alinhados à direita */}
      <div className={styles.navRight}>
        <div className={styles.ctas}>
          <Link to="/login" className={styles.login}>
            Login
          </Link>
          <Link to="/cadastro" className={styles.signup}>
            Cadastrar-se
          </Link>
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label={`Mudar para tema ${currentTheme === "light" ? "escuro" : "claro"}`}
          >
            {currentTheme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Menu hambúrguer (mobile) */}
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
      </div>
    </nav>
  );
};

export default Navbar;