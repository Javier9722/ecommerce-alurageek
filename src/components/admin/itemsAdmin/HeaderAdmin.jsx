import React, { useEffect, useState } from "react";
import ThemeToggle from "../../ThemeToggleButton";
import { transition as t, hover as h } from "../../../ultilities/tailwind";

export const HeaderAdmin = ({ dataVivero, setVisibleItems }) => {
  const [themeParent, setThemeParent] = useState(localStorage.getItem("theme"));
  const [menuMovil, setMenuMovil] = useState(false);

  const clickMenu = () => {
    setMenuMovil(menuMovil === true ? false : true);
  };

  const unlogged = () => {
    localStorage.removeItem("status");
    window.location.replace(
      "https://javier9722.github.io/ecommerce-alurageek/"
    );
  };

  const renderPerfil = () => {
    setVisibleItems({ perfil: true, products: false });
    setMenuMovil(false);
  };
  const renderProducts = () => {
    setVisibleItems({ perfil: false, products: true });
    setMenuMovil(false);
  };

  return (
    <header className="py-4 flex justify-between items-center relative">
      <div className="flex gap-2 items-center">
        <ThemeToggle themeParent={[themeParent, setThemeParent]} />
        <h1 className={`text-slate-600 dark:text-slate-300 text-[1.3rem] ${t}`}>
          {dataVivero.name}
        </h1>
      </div>

      <div className="sm:hidden">
        <i
          className="fad fa-bars cursor-pointer"
          style={
            themeParent === "light"
              ? {
                  "--fa-primary-color": "#475569",
                  "--fa-secondary-color": "#d97706",
                  "--fa-secondary-opacity": "0.5",
                }
              : {
                  "--fa-primary-color": "#d97706",
                  "--fa-secondary-color": "#cbd5e1",
                  "--fa-secondary-opacity": "0.5",
                }
          }
          onClick={clickMenu}
        ></i>
      </div>
      {/* menu movil */}
      {menuMovil ? (
        <div
          className={`w-max absolute z-10 top-[60px] right-0 lg:right-auto grid gap-1 py-4 px-2 backdrop-blur-md rounded-lg bg-slate-300/10 dark:bg-slate-800/50 sm:hidden ${t}`}
        >
          <ul className={`text-slate-600 dark:text-slate-300  ${t}`}>
            <li
              className="hover:text-amber-600 cursor-pointer mb-2"
              onClick={renderPerfil}
            >
              Mi Perfil
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer mb-2"
              onClick={renderProducts}
            >
              Productos
            </li>
          </ul>
          <button
            className={`text-red-600  hover:text-red-700 font-bold`}
            onClick={unlogged}
          >
            Cerrar Sesion
          </button>
        </div>
      ) : (
        <></>
      )}

      {/* menu grande xd */}
      <div className="hidden sm:flex sm:gap-2">
        <ul
          className={`flex gap-2 items-center text-slate-600 dark:text-slate-300 ${t}`}
        >
          <li
            className="hover:text-amber-600 cursor-pointer"
            onClick={renderPerfil}
          >
            Mi Perfil
          </li>
          <li
            className="hover:text-amber-600 cursor-pointer"
            onClick={renderProducts}
          >
            Productos
          </li>
        </ul>
        <button
          className={`border-2 border-red-700 rounded-xl py-1 px-2 text-red-700 font-bold hover:bg-red-700 hover:text-slate-300 ${h}`}
          onClick={unlogged}
        >
          Cerrar Sesion
        </button>
      </div>
    </header>
  );
};
