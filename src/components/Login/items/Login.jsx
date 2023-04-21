import React, { useEffect, useState } from "react";
import { validLogin } from "../../../APIs/validate";

export const Login = ({ setIsForm }) => {
  const [isRender, setIsRender] = useState(false);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    setIsRender(true);
  }, []);

  const auth = async (e) => {
    e.preventDefault();

    const credentials = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const result = await validLogin(credentials);
    if (result) {
      setMessage("Success");
      setTimeout(() => {
        window.location.replace("https://ecommerce-alurageek.deno.dev/");
      }, 2000);
    } else {
      setMessage("Error, verifique sus credenciales");
    }
  };

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
      <form onSubmit={auth}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Correo"
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
        {message ? (
          <p
            className={
              message === "Success" ? "text-green-500" : "text-red-500"
            }
          >
            {message}
          </p>
        ) : (
          <></>
        )}
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
