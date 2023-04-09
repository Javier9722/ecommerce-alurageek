import React from "react";

export const ProductCard = ({ producto }) => {
  return (
    <a href="#">
      <div className="w-[140px] h-fit overflow-hidden">
        <img
          src={producto.img}
          alt={producto.name}
          className="h-[140px] w-[100%] object-cover rounded-lg"
        />
        <div>
          <span className="font-bold">S/. {producto.precio}</span>
          {/* precio anterior component */}
        </div>
        <span className="text-[0.9rem]">{producto.name}</span>
        <p className="text-[0.8rem] truncate text-justify">
          {producto.description}
        </p>
      </div>
    </a>
  );
};
