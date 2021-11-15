import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import AboutUs from "./AboutUs";
import Nav from "../components/Nav";
import OurWork from "./OurWork";
import ContactUs from "./ContactUs";

import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
