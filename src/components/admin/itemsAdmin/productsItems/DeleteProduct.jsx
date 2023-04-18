import React from "react";
import { deleteProducts } from "../../../../APIs/fetch";

export const DeleteProduct = ({ producto, setConfirmDeleteView }) => {
  const borrarProducto = () => {
    console.log(producto.id);
    deleteProducts(producto.id);
  };
  const closeConfirm = () => {
    setConfirmDeleteView({
      view: false,
    });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-slate-300/70 dark:bg-slate-900/70 backdrop-blur-sm grid place-items-center">
      <div className="max-w-[400px] bg-slate-900/10 text-slate-500 dark:text-slate-300 dark:bg-slate-300/10 backdrop-blur-3xl p-4 rounded-lg">
        <h1 className="text-center font-bold text-[1.2rem]">Detalles</h1>
        <div>
          <img
            src={producto.img}
            alt="logo"
            className="w-[200px] h-[200px] object-cover mx-auto"
          />
          <ul>
            <li>
              <span className="font-bold">Nombre:</span> {producto.name}
            </li>
            <li>
              <span className="font-bold">Descripcion:</span>{" "}
              {producto.description}
            </li>
            <li>
              <span className="font-bold">Precio:</span> {producto.precio}
            </li>
            <li>
              <span className="font-bold">Stock:</span> {producto.stock}
            </li>
            <li>
              <span className="font-bold">Categoria:</span> {producto.category}
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-center font-bold text-[1.1rem]">Desea Borrar?</h2>
          <div className="flex items-center justify-between">
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={borrarProducto}
            >
              Aceptar
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={closeConfirm}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
