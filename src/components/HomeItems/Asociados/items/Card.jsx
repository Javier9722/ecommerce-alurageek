import React from "react";

export const Card = ({ rute, id, data }) => {
  let imagen = data.img;

  if (imagen == "" || imagen == " ") {
    imagen =
      "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
  return (
    <a href={`vivero/${rute}?id=${id}`}>
      <div className="w-[100px] flex flex-col gap-2 items-center flex-shrink-0">
        <img
          className="w-[80px] h-[80px] object-cover rounded-[50%]"
          src={imagen}
        />
        <p className="text-center">{data.name}</p>
      </div>
    </a>
  );
};
