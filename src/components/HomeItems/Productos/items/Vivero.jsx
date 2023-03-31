import React from "react";
import { ProductCard } from "./ProductCard";
import { transition as t } from "../../../../ultilities/tailwind";

export const Vivero = ({ data }) => {
  return (
    <div
      className={`w-[inherit] grid gap-2 bg-slate-100 p-2 rounded-3xl dark:bg-slate-800 dark:text-slate-300 ${t}`}
    >
      <div className="flex gap-2 items-center">
        <img
          src={data.datos.img}
          alt={data.datos.name}
          className="rounded-[50%] w-[40px]"
        />
        <h1>{data.datos.name}</h1>
      </div>
      <div className="flex gap-4 pl-12 overflow-x-auto">
        {data.productos.map((item, id) => (
          <ProductCard key={id} data={item} />
        ))}
      </div>
    </div>
  );
};
