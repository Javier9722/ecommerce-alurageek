import React, { useEffect, useState } from "react";
import { Login } from "./items/Login";
import { RegCliente } from "./items/RegCliente";
import { RegVivero } from "./items/RegVivero";

export const Form = () => {
  const [isRender, setIsRender] = useState(false);
  const [isForm, setIsForm] = useState({
    login: true,
    cliente: false,
    vivero: false,
  });

  useEffect(() => {
    setIsRender(true);
  }, []);
  return (
    <div className="bg-slate-200/80 min-w-[378px] shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      {isForm.login ? <Login setIsForm={setIsForm} /> : <></>}
      {isForm.cliente ? <RegCliente setIsForm={setIsForm} /> : <></>}
      {isForm.vivero ? <RegVivero setIsForm={setIsForm} /> : <></>}
    </div>
  );
};
