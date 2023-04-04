import React from "react";
import ThemeToggle from "../../ThemeToggleButton";

export const HeaderAdmin = ({ dataVivero }) => {
  console.log(dataVivero);
  return (
    <div>
      <h1>Hola soy el header</h1>
      <p>xd</p>
      <ThemeToggle />
    </div>
  );
};
