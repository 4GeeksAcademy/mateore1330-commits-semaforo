import React from "react";

const ORDEN_CON_PURPURA = {
  roja: "amarilla",
  amarilla: "verde",
  verde: "purpura",
  purpura: "roja",
};
const ORDEN_SIN_PURPURA = {
  roja: "amarilla",
  amarilla: "verde",
  verde: "roja",
};

const BotonCambiarColor = ({ color, setColor, purpuraVisible }) => {
  const cambiarColor = () => {
    const orden = purpuraVisible ? ORDEN_CON_PURPURA : ORDEN_SIN_PURPURA;
    setColor(orden[color] || "roja");
  };

  return (
    <button
      type="button"
      title="Cambiar color"
      className="btn btn-dark"
      onClick={cambiarColor}
    >
      Cambiar color
    </button>
  );
};

export default BotonCambiarColor;
