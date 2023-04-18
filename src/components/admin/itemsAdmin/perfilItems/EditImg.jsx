import React from "react";
import { editVivero } from "../../../../APIs/fetch";

export const EditImg = ({ id, setFormView, datos }) => {
  const edit = (e) => {
    e.preventDefault();
    const data = {
      img: e.target[0].value,
    };
    editVivero(data, id);
  };
  const cancelButton = () => {
    setFormView({
      perfil: false,
      img: false,
    });
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
              Logo de la empresa
            </label>
            <input
              className="rounded w-full py-2 px-3 text-slate-500 dark:text-slate-300 focus:outline-none bg-white/20"
              id="nombre_vivero"
              type="text"
              placeholder="Logo de la empresa"
              defaultValue={datos.img}
            />
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
