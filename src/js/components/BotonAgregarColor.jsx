import React from "react";

const BotonAgregarColor = ({ visible, onToggle }) => {
  return (
    <button type="button" className="btn btn-dark" onClick={onToggle}>
      {visible ? "Eliminar púrpura" : "Añadir púrpura"}
    </button>
  );
};

export default BotonAgregarColor;
