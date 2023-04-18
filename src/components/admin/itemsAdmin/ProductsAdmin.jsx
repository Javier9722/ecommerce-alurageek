import React, { useState } from "react";
import { EditProduct } from "./productsItems/EditProduct";
import { transition as t, hover as h } from "../../../ultilities/tailwind";
import { TH, TR } from "./productsItems/List";
import { CreateProduct } from "./productsItems/CreateProduct";
import { DeleteProduct } from "./productsItems/DeleteProduct";

export const ProductsAdmin = ({ idVivero, dataProductos }) => {
  const [createFormView, setCreateFormView] = useState(false);
  const [editFormView, setEditFormView] = useState({
    view: false,
    producto: undefined,
  });
  const [confirmDeleteView, setConfirmDeleteView] = useState({
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
  const openCreateForm = () => {
    setCreateFormView(true);
  };
  return (
    <div>
      <h1
        className={`text-[1.5rem] font-bold text-slate-600 dark:text-slate-300 ${t}`}
      >
        Productos
      </h1>
      <button
        className={`mt-2 rounded-lg px-2 py-1 text-amber-500 bg-transparent hover:bg-amber-500 hover:text-amber-900 ${h}`}
        onClick={openCreateForm}
      >
        <i className="fas fa-plus"></i> Productos
      </button>
      <div className="mt-4">
        {dataProductos.length !== 0 ? (
          <div className="w-[inherit] overflow-x-auto box-border ">
            <table className="w-full max-w-[1240px] mx-auto">
              <thead className="">
                <tr className={`text-slate-600 dark:text-slate-300 ${t}`}>
                  <TH sections={sections} />
                </tr>
              </thead>
              <tbody className="">
                <TR
                  productos={dataProductos}
                  setEditFormView={setEditFormView}
                  setConfirmDeleteView={setConfirmDeleteView}
                />
              </tbody>
            </table>
          </div>
        ) : (
          <span>No hay productos xd</span>
        )}
      </div>
      {editFormView.view ? (
        <EditProduct
          idVivero={idVivero}
          producto={editFormView.producto}
          setEditFormView={setEditFormView}
        />
      ) : (
        <></>
      )}
      {createFormView ? (
        <CreateProduct
          idVivero={idVivero}
          setCreateFormView={setCreateFormView}
        />
      ) : (
        <></>
      )}
      {confirmDeleteView.view ? (
        <DeleteProduct
          producto={confirmDeleteView.producto}
          setConfirmDeleteView={setConfirmDeleteView}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
