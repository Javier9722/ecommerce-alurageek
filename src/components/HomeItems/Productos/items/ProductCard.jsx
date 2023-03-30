import React from "react";

export const ProductCard = ({ data }) => {
  return (
    <a href="#">
      <div className="w-[140px] h-fit overflow-hidden">
        <img
          src={data.img}
          alt={data.name}
          className="h-[140px] w-[100%] object-cover rounded-lg"
        />
        <div>
          <span className="font-bold">S/. {data.precio}</span>
          {/* precio anterior component */}
        </div>
        <span className="text-[0.9rem]">{data.name}</span>
        <p className="text-[0.8rem] truncate text-justify">
          {data.description}
        </p>
      </div>
    </a>
  );
};
