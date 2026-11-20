import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <Main />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;