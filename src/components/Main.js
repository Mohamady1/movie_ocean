import React, { useEffect } from "react";
import "@fontsource/bebas-neue";
import { fetchData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import Home from "./Home";
import Movies from "./Movies";

function Main() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.data);
  state?.sort((a, b) => a.Title.localeCompare(b.Title));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Nav Bar */}
      <Nav />

      {/* HomePage and Background */}
      <Home />

      {/* Movies */}
      <Movies state={state} />
    </div>
  );
}

export default Main;
