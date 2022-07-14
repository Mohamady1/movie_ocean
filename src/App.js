import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
      </Router>
      ;
    </>
  );
}

export default App;
