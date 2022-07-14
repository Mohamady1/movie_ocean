import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

function Movie() {
  const [url, setUrl] = useState("");
  const { id } = useParams();
  const state = useSelector((s) => s.data[id]);
  const [movieName] = useState(state.Title);

  useEffect(() => {
    const getUrl = async () => {
      const url = await movieTrailer(movieName);
      setUrl(url);
    };
    getUrl();
  }, [movieName]);

  return (
    <div>
      <Nav />
      <div
        style={{
          backgroundImage: `url(${state.Images[2]})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "96vh",
          opacity: "0.75",
          zIndex: "999",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.455)",
          flexDirection: "column",
          gap: "40px",
          position: "absolute",
          bottom: "60px",
          left: "10px",
          padding: "20px",
          borderRadius: "20px",
          color: "white",
          width: "80%",
        }}
      >
        <div>
          <h1>{state.Title}</h1>
        </div>

        <div
          style={{ display: "flex", gap: "20px", color: "rgb(185, 182, 182)" }}
        >
          <h3>
            {" "}
            {state.Year} | {state.Runtime} | {state.Genre} |
            {state.imdbRating === "N/A" ? (
              "Rating Not Found"
            ) : (
              <>
                {state.imdbRating} <AiFillStar color="yellow" />
              </>
            )}
          </h3>
        </div>
        <div>
          <h4>{state.Plot}</h4>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <h3 style={{ color: "rgb(185, 182, 182)" }}>Starring: </h3>
          <h3>{state.Actors}</h3>
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <h1>Watch Trailer</h1>
        <ReactPlayer
          style={{
            marginTop: "50px",
          }}
          width="100%"
          url={
            state.Title === "The Wolf of Wall Street"
              ? "https://www.youtube.com/watch?v=iszwuX1AK6A"
              : state.Title === "Luke Cage"
              ? "https://www.youtube.com/watch?v=ORa4hPhGrpo"
              : state.Title === "Narcos"
              ? "https://www.youtube.com/watch?v=xl8zdCY-abw"
              : url
          }
          controls={true}
        />
      </div>
    </div>
  );
}

export default Movie;
