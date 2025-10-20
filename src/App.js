// src/App.js
import React from "react";
import Header from "./GlobalComponents/Header";
import Footer from "./GlobalComponents/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />

      <main>
        {/* All pages rendered sequentially for testing */}
        <Home />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}

export default App;
