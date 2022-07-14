import React, { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function Nav() {
  const [navbg, setNavbg] = useState(false);
  const [darkmode, setDarkMode] = useState(true);
  const [icons, setIcon] = useState();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    });
  });

  useEffect(() => {
    if (darkmode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setIcon(<BsSunFill size="35" color="yellow" />);
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setIcon(<BsMoon size="35" />);
    }
  }, [darkmode]);

  return (
    <div
      className="nav"
      style={{
        backgroundColor:
          navbg && darkmode
            ? "rgba(255, 255, 255, 0.655)"
            : navbg
            ? "rgba(0, 0, 0, 0.655)"
            : "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        padding: "15px",
        width: "100%",
        zIndex: "10",
      }}
    >
      <div>
        <h1 className="logo">Ocean Movies</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: " center",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#movies">Movies</a>
        </li>
        <i
          style={{ cursor: "pointer", fontSize: "25px" }}
          onClick={() => setDarkMode(!darkmode)}
        >
          {icons}
        </i>
      </div>
    </div>
  );
}

export default Nav;
