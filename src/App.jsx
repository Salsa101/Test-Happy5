import React from "react";
import "./App.css";
import Products from "./Pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  function Layout() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </>
    );
  }
};

export default App;
