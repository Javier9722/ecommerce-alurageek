import React, { useState } from "react";
import { transition as t } from "../../../ultilities/tailwind";
import { Menu } from "./loggedItems/Menu";

export const Logged = ({ data, setData }) => {
  const [isVisible, setIsVisible] = useState(false);
  let imagen = data.datos.img;

  imagen == ""
    ? (imagen =
        "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    : "";

  const itemsPerfil = () => {
    setIsVisible(isVisible === true ? false : true);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={itemsPerfil}>
        <div
          className={`flex gap-4 items-center text-slate-600 dark:text-slate-300 text-[1.2rem] ${t}`}
        >
          <img
            src={imagen}
            alt="logo"
            className="w-[19px] h-[19px] object-cover rounded-[50%]"
          />
          <span className="hidden sm:block">{data.datos.name}</span>
        </div>
      </div>
      {isVisible ? (
        <Menu id={data.id} name={data.datos.name} setData={setData} />
      ) : (
        <></>
      )}
    </>
  );
};
