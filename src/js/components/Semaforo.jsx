import React, { useState } from "react";
import BotonCambiarColor from "./BotonCambiarColor";
import BotonAgregarColor from "./BotonAgregarColor";

const Semaforo = () => {
  const [color, setColor] = useState("");
  const [purpuraVisible, setPurpuraVisible] = useState(false);

  const toggleColorPurpura = () => {
    setPurpuraVisible((prev) => {
      const next = !prev;
      if (!next && color === "purpura") setColor("");
      return next;
    });
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="d-inline-flex flex-column align-items-center gap-4 p-4 bg-dark rounded-4 shadow">
        <div
          className={`rounded-circle bg-danger p-5 ${color === "roja" ? "opacity-100" : "opacity-25"}`}
          style={{
            boxShadow:
              color === "roja"
                ? "0 0 30px 10px rgba(220, 53, 69, 0.8)"
                : "none",
          }}
          onClick={() => setColor("roja")}
          role="button"
        ></div>
        <div
          className={`rounded-circle bg-warning p-5 ${color === "amarilla" ? "opacity-100" : "opacity-25"}`}
          style={{
            boxShadow:
              color === "amarilla"
                ? "0 0 30px 10px rgba(255, 193, 7, 0.8)"
                : "none",
          }}
          onClick={() => setColor("amarilla")}
          role="button"
        ></div>
        <div
          className={`rounded-circle bg-success p-5 ${color === "verde" ? "opacity-100" : "opacity-25"}`}
          style={{
            boxShadow:
              color === "verde"
                ? "0 0 30px 10px rgba(25, 135, 84, 0.8)"
                : "none",
          }}
          onClick={() => setColor("verde")}
          role="button"
        ></div>
        {purpuraVisible && (
          <div
            className={`rounded-circle p-5 ${color === "purpura" ? "opacity-100" : "opacity-25"}`}
            style={{
              backgroundColor: "#6f42c1",
              boxShadow:
                color === "purpura"
                  ? "0 0 30px 10px rgba(111, 66, 193, 0.8)"
                  : "none",
            }}
            onClick={() => setColor("purpura")}
            role="button"
          ></div>
        )}
      </div>
      <div className="bg-dark px-2 py-5"></div>
      <div className="d-grid gap-2 mt-4">
        <BotonCambiarColor
          color={color}
          setColor={setColor}
          purpuraVisible={purpuraVisible}
        />
        <BotonAgregarColor
          visible={purpuraVisible}
          onToggle={toggleColorPurpura}
        />
      </div>
    </div>
  );
};

export default Semaforo;
