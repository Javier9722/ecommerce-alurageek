import React from "react";

export const Card = ({ rute, id, data }) => {
  return (
    <a href={`vivero/${rute}?id=${id}`}>
      <div className="w-[100px] flex flex-col gap-2 items-center flex-shrink-0">
        <img className="w-[80px] rounded-[50%]" src={data.img} />
        <p className="text-center">{data.name}</p>
      </div>
    </a>
  );
};
