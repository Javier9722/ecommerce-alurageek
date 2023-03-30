import React from "react";

export const Card = ({ rute, id, data }) => {
  return (
    <a
      href={`vivero/${rute}?id=${id}`}
      className="w-[150px] flex flex-col gap-2 items-center"
    >
      <img className="w-[100px] rounded-[50%]" src={data.img} />
      <p className="text-sky-600">{data.name}</p>
    </a>
  );
};
