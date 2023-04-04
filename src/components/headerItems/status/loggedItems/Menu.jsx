import React, { useEffect, useState } from "react";
import { transition as t } from "../../../../ultilities/tailwind";
export const Menu = ({ id, name, setData }) => {
  const [isRender, setIsRender] = useState(false);
  const unLogged = () => {
    localStorage.removeItem("status");
    setData(null);
  };
  useEffect(() => {
    setIsRender(true);
  }, []);
  const rute = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return isRender ? (
    <div
      className={`w-max absolute z-10 top-[60px] right-0 lg:right-auto grid gap-1 py-4 px-2 backdrop-blur-md rounded-lg text-slate-900 dark:text-slate-300 bg-slate-300/10 dark:bg-slate-800/50 ${t}`}
    >
      <a href={`admin/${rute}?id=${id}`}>
        <span className="hover:text-amber-600">Productos</span>
      </a>
      <span
        className={`hover:text-amber-600 cursor-pointer`}
        onClick={unLogged}
      >
        Cerrar sesion
      </span>
    </div>
  ) : (
    <></>
  );
};
