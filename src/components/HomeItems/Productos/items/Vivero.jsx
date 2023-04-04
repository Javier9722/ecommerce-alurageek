import React from "react";
import { ProductCard } from "./ProductCard";
import { transition as t } from "../../../../ultilities/tailwind";

export const Vivero = ({ data }) => {
  let numProducts = data.productos.length;

  let imagen = data.datos.img;

  imagen == ""
    ? (imagen =
        "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    : "";

  return numProducts > 0 ? (
    <div
      className={`w-[inherit] grid gap-2 bg-slate-100 p-2 rounded-3xl dark:bg-slate-800 dark:text-slate-300 ${t}`}
    >
      <div className="flex gap-2 items-center">
        <img
          src={imagen}
          alt={data.datos.name}
          className="rounded-[50%] w-[40px] h-[40px] object-cover"
        />
        <h1>{data.datos.name}</h1>
      </div>
      <div className="flex gap-4 pl-12 overflow-x-auto">
        {data.productos.map((item, id) => (
          <ProductCard key={id} data={item} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
