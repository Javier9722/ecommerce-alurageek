import React from "react";
import { Vivero } from "./items/Vivero";

export const Productos = ({ data }) => {
  return (
    <div className="grid gap-4">
      {data.map((vivero, id) => (
        <Vivero data={vivero} key={id} />
      ))}
    </div>
  );
};
