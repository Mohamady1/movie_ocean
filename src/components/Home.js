import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [random] = useState(Math.floor(Math.random() * 17));
  const state = useSelector((s) => s.data);

  return (
    <>
      {state && (
        <>
          <div
            style={{
              backgroundImage: `url(${state[random]?.Images[0]})`,
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
              position: "absolute",
              bottom: "80px",
              left: "15px",
              display: "flex",
              gap: "40px",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 0.055)",
              padding: "20px",
              borderRadius: "20px",
              width: "80%",
              color: "white",
            }}
          >
            <h1>{state[random]?.Title}</h1>
            <p>{state[random]?.Plot}</p>
          </div>
        </>
      )}
      ;
    </>
  );
}

export default Home;
