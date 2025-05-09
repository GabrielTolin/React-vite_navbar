import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
