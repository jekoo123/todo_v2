import "./App.css";
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Input from "./pages/input/input";
import Search from "./pages/search/search";

const App = () => {
  let [object, setObject] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            React.cloneElement(<Input />, {
              object: object,
              setObject: setObject,
            })
          }
        />
        <Route
          path="/search"
          element={
            React.cloneElement(<Search />, {
              object: object,
            })
          }
        />      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
