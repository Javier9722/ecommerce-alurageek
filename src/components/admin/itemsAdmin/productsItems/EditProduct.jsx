import React from "react";
import { editProducts } from "../../../../APIs/fetch";

export const EditProduct = ({ idVivero, producto, setEditFormView }) => {
  // console.log(producto);
  const edit = (e) => {
    e.preventDefault();
    const data = {
      id: producto.id,
      name:
        e.target[0].value === "" || e.target[0].value === " "
          ? "N.A."
          : e.target[0].value,
      description:
        e.target[1].value === "" || e.target[1].value === " "
          ? "N.A."
          : e.target[1].value,
      precio:
        e.target[2].value === "" || e.target[2].value === " "
          ? "N.A."
          : e.target[2].value,
      stock:
        e.target[3].value === "" || e.target[3].value === " "
          ? "N.A."
          : e.target[3].value,
      category:
        e.target[4].value === "" || e.target[4].value === " "
          ? "N.A."
          : e.target[4].value,
      img: e.target[5].value,
    };
    editProducts(data);
  };
  const cancelButton = () => {
    setEditFormView({
      view: false,
    });
  };
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-slate-300/70 dark:bg-slate-900/70 backdrop-blur-sm grid place-items-center">
      <div className="max-w-[500px] bg-slate-900/10 dark:bg-slate-300/10 backdrop-blur-3xl p-4 rounded-lg">
        <form onSubmit={edit}>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="nombre_producto"
            >
              Nombre del Producto
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="nombre_producto"
              type="text"
              placeholder="Nombre del Producto"
              defaultValue={producto.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Descripción del Producto
            </label>
            <textarea
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="description"
              placeholder="Descripción del Producto"
              defaultValue={producto.description}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="precio"
            >
              Precio
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="precio"
              type="text"
              placeholder="Precio"
              defaultValue={producto.precio}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="stock"
              type="text"
              placeholder="Stock"
              pattern="[0-9]+"
              defaultValue={producto.stock}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Categoria
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="category"
              type="text"
              placeholder="Categoria"
              defaultValue={producto.category}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Imagen
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="image"
              type="text"
              placeholder="Url de la Imagen"
              defaultValue={producto.img}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Editar
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={cancelButton}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
