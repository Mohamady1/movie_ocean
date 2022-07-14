import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Movies({ state }) {
  return (
    <div style={{ padding: "10px" }}>
      <h1>Movies</h1>
      <div
        id="movies"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {state?.map((card) => (
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            key={card.imdbID}
            to={`/movie/${state.findIndex((o) => {
              return o.Title === card.Title;
            })}`}
          >
            <Card card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
