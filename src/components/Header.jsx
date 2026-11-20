import React from "react";

function Header() {
  return (
    <header className="top-bar">
      <div className="wrap top-bar-row">
        <div className="brand-mark">☕ NOMAD ROASTERY</div>
        <nav className="top-nav">
          <a href="#home">Басты</a>
          <a href="#story">Тарихымыз</a>
          <a href="#menu">Мәзір мен қызмет</a>
          <a href="#contact">Байланыс</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;