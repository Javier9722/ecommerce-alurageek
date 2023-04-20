import React from "react";
import { transition as t } from "../../../ultilities/tailwind";

export const Unlogged = () => {
  return (
    <a className="cursor-pointer" href="/ecommerce-alurageek/login">
      <div
        className={`flex gap-4 items-center text-slate-600 dark:text-slate-300 text-[1.2rem] ${t}`}
      >
        <i className={`fas fa-user-circle`}></i>
        <span className="hidden sm:block">Ingreso</span>
      </div>
    </a>
  );
};
