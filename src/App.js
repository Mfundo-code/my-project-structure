import React from "react";
import { Routes, Route } from "react-router-dom";
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
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
