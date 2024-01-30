import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import About from "./About";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/projects" element={<Projects />}></Route>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
