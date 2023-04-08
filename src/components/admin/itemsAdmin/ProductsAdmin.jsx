import React, { useState } from "react";
import { EditProduct } from "./productsItems/EditProduct";
import { transition as t, hover as h } from "../../../ultilities/tailwind";
import { TH, TR } from "./productsItems/List";

export const ProductsAdmin = ({ id, productos }) => {
  const [formView, setFormView] = useState({
    view: false,
    producto: undefined,
  });
  const sections = [
    "Nombre",
    "Descripción",
    "Precio",
    "Stock",
    "Categoría",
    "Imagen",
    "Acciones",
  ];
  return (
    <div>
      <h1
        className={`text-[1.5rem] font-bold text-slate-600 dark:text-slate-300 ${t}`}
      >
        Productos
      </h1>
      <button
        className={`mt-2 rounded-lg px-2 py-1 text-amber-500 bg-transparent hover:bg-amber-500 hover:text-amber-900 ${h}`}
      >
        <i className="fas fa-plus"></i> Productos
      </button>
      <div className="mt-4">
        {productos.length !== 0 ? (
          <div className="w-[inherit] overflow-x-auto box-border ">
            <table className="w-full max-w-[1240px] mx-auto">
              <thead className="">
                <tr className={`text-slate-600 dark:text-slate-300 ${t}`}>
                  <TH sections={sections} />
                </tr>
              </thead>
              <tbody className="">
                <TR productos={productos} setFormView={setFormView} />
              </tbody>
            </table>
          </div>
        ) : (
          <span>No hay productos xd</span>
        )}
      </div>
      {formView.view ? (
        <EditProduct
          idVivero={id}
          producto={formView.producto}
          setFormView={setFormView}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
