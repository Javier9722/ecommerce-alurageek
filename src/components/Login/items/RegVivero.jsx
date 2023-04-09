import React, { useEffect, useState } from "react";
import { crearVivero } from "../../../APIs/fetch";

export const RegVivero = ({ setIsForm }) => {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    setIsRender(true);
  }, []);

  const backForm = () => {
    setIsForm({
      login: true,
      cliente: false,
      vivero: false,
    });
  };

  const newVivero = async (e) => {
    e.preventDefault();
    const viveroName = e.target[0].value;
    const name = e.target[1].value;
    const lname = e.target[2].value;
    const phone = e.target[3].value;
    const email = e.target[4].value;
    const password = e.target[5].value;
    const direction = e.target[6].value;

    const vivero = {
      name: viveroName,
      direction: direction,
      dueno: name + " " + lname,
      email: email,
      celular: phone,
    };
    const credenciales = {
      email: email,
      password: password,
    };

    await crearVivero(vivero, credenciales);
  };

  return isRender ? (
    <>
      <div className="absolute top-5 left-4 ">
        <i
          className="fas fa-arrow-alt-left text-[1.5rem] text-slate-600 hover:text-blue-600 cursor-pointer"
          onClick={backForm}
        ></i>
      </div>

      <h1 className="text-[1.5rem] font-bold text-center">
        Registra tu Vivero
      </h1>
      <form onSubmit={newVivero}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre_vivero"
          >
            Nombre del Vivero
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre_vivero"
            type="text"
            placeholder="Nombre del Vivero"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="apellidos"
          >
            Apellidos
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellidos"
            type="text"
            placeholder="Apellidos"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono de Contacto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="text"
            placeholder="Teléfono de Contacto"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="direccion"
          >
            Dirección
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="direccion"
            placeholder="Dirección"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
    </>
  ) : (
    <></>
  );
};
