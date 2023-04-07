import React from "react";
import { editVivero } from "../../../../APIs/fetch";

export const EditPerfil = ({ setFormView, resVivero }) => {
  const edit = (e) => {
    e.preventDefault();
    const url = new URL(window.location.href).searchParams;
    const urlid = Number(url.get("id"));
    const data = {
      datos: {
        name: e.target[0].value,
        description: e.target[1].value,
        direction: e.target[2].value,
        referencia: e.target[3].value,
        img: resVivero.img,
        dueno: e.target[4].value,
        email: e.target[5].value,
        celular: e.target[6].value,
      },
    };
    editVivero(data, urlid);
  };
  const cancelButton = () => {
    setFormView(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-slate-300/70 dark:bg-slate-900/70 backdrop-blur-sm grid place-items-center">
      <div className="max-w-[500px] bg-slate-900/10 dark:bg-slate-300/10 backdrop-blur-3xl p-4 rounded-lg">
        <form onSubmit={edit}>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="nombre_vivero"
            >
              Nombre del Vivero
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="nombre_vivero"
              type="text"
              placeholder="Nombre del Vivero"
              defaultValue={resVivero.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="description"
              placeholder="Nombre"
              defaultValue={resVivero.description}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="direction"
            >
              Dirección
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="direction"
              type="text"
              placeholder="Dirección"
              defaultValue={resVivero.direction}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="referencia"
            >
              Referencia
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="referencia"
              type="text"
              placeholder="Referencia"
              defaultValue={resVivero.referencia}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="dueno"
            >
              Dueño
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="dueno"
              type="text"
              placeholder="name"
              defaultValue={resVivero.dueno}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="email"
              type="email"
              placeholder="Correo Electronico"
              defaultValue={resVivero.email}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-2"
              htmlFor="celular"
            >
              Numero de Celular
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-300 focus:outline-none bg-white/20"
              id="celular"
              type="text"
              placeholder="Numero de Contacto"
              defaultValue={resVivero.celular}
              pattern="[0-9]{9}"
              maxLength="9"
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
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
