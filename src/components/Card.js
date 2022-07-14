import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({ card }) {
  const [src, setSrc] = React.useState(card.Images[0]);

  return (
    <div key={card.imdbID} style={{ width: "202px" }}>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "200px", height: "240px", borderRadius: "5px" }}
          src={src}
          alt=""
          onMouseEnter={() => setSrc(card.Images[1])}
          onMouseLeave={() => setSrc(card.Images[0])}
        />
        {card.imdbRating === "N/A" ? (
          ""
        ) : (
          <div>
            <AiFillStar
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "1",
              }}
              size={60}
              color="yellow"
            />
            <h3
              style={{
                position: "absolute",
                top: "28px",
                right: "29px",
                zIndex: "999",
                color: "black",
              }}
            >
              {card.imdbRating}
            </h3>
          </div>
        )}
      </div>
      <p style={{ textAlign: "center" }}>
        {card.Title} ({card.Year})
      </p>
    </div>
  );
}

export default Card;
