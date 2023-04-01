import React, { useEffect, useState } from "react";

export const Login = ({ setIsForm }) => {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    setIsRender(true);
  }, []);

  const regCliente = () => {
    setIsForm({
      login: false,
      cliente: true,
      vivero: false,
    });
  };

  const regVivero = () => {
    setIsForm({
      login: false,
      cliente: false,
      vivero: true,
    });
  };

  return isRender ? (
    <>
      <form className="">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={regCliente}
          >
            Registro
          </button>
        </div>
      </form>
      <p className="text-slate-600 mt-4">
        Tienes tu vivero?, asociate con nosotrs
        <span
          className="text-amber-600 hover:text-amber-700 cursor-pointer font-bold"
          onClick={regVivero}
        >
          {" "}
          Aquí
        </span>
      </p>
    </>
  ) : (
    <></>
  );
};
