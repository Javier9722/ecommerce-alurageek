import React from "react";
import { transition as t, hover as h } from "../../../../ultilities/tailwind";

export const TH = ({ sections }) => {
  return (
    <>
      <th className="px-4 py-2 min-w-[180px]">{sections[0]}</th>
      <th className="px-4 py-2 min-w-[250px]">{sections[1]}</th>
      <th className="px-4 py-2 min-w-[100px]">{sections[2]}</th>
      <th className="px-4 py-2">{sections[3]}</th>
      <th className="px-4 py-2">{sections[4]}</th>
      <th className="px-4 py-2 min-w-[100px]">{sections[5]}</th>
      <th className="px-4 py-2">{sections[6]}</th>
    </>
  );
};

export const TR = ({ productos, setEditFormView }) => {
  return (
    <>
      {productos.map((producto, id) => {
        const openForm = () => {
          setEditFormView({
            view: true,
            producto: producto,
          });
        };
        return (
          <tr key={id} className="">
            <TD type={"text"} value={producto.name} />
            <TD type={"text"} value={producto.description} />
            <TD type={"text"} value={producto.precio} />
            <TD type={"text"} value={producto.stock} />
            <TD type={"text"} value={producto.category} />
            <TD type={"img"} value={producto.img} name={producto.name} />
            <td
              className={`border-l-2 border-t-2 border-b-2 border-slate-200 dark:border-slate-800 px-4 py-2 ${t}`}
            >
              <div className="flex justify-center space-x-1">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-1 px-2 rounded ${h}`}
                  onClick={openForm}
                >
                  <i className="far fa-edit"></i>
                </button>
                <button
                  className={`bg-rose-500 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-900 text-white font-bold py-1 px-2 rounded ${h}`}
                >
                  <i className="far fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

const TD = ({ id = null, type, value = null, name = null }) => {
  if (type === "text") {
    return (
      <td
        className={`border-r-2 border-t-2 border-b-2 border-slate-200 text-slate-600 dark:text-slate-300 dark:border-slate-800 px-4 py-2 ${t}`}
      >
        {value}
      </td>
    );
  }
  if (type === "img") {
    return (
      <td
        className={`border-t-2 border-b-2 border-slate-200 dark:border-slate-800 px-4 py-2 ${t}`}
      >
        <img
          src={value}
          alt={name}
          className="w-[70px] h-[70px] object-cover"
        />
      </td>
    );
  }
};
