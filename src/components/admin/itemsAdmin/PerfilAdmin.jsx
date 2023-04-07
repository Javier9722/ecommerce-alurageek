import React, { useEffect, useState } from "react";
import { transition as t } from "../../../ultilities/tailwind";
import { AtributePerfil } from "./perfilItems/AtributePerfil";
import { EditPerfil } from "./perfilItems/EditPerfil";
import { EditImg } from "./perfilItems/EditImg";

export const PerfilAdmin = ({ id, datos }) => {
  const [imagen, setImagen] = useState(datos.img);
  const [formView, setFormView] = useState({
    perfil: false,
    img: false,
  });
  let arrInfo = [
    { key: "Nombre", info: datos.name },
    { key: "Descripción", info: datos.description },
    { key: "Dirección", info: datos.direction },
    { key: "Referencia", info: datos.referencia },
    { key: "Dueño", info: datos.dueno },
    { key: "Correo", info: datos.email },
    { key: "Celular", info: datos.celular },
  ];
  let defaultIMG =
    "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  useEffect(() => {
    setImagen(imagen === "" ? defaultIMG : imagen);
  }, []);

  const viewPerfil = () => {
    setFormView({
      perfil: true,
      img: false,
    });
  };

  const viewImg = () => {
    setFormView({
      perfil: false,
      img: true,
    });
  };

  return (
    <>
      <div
        className={`grid justify-items-center text-slate-600 dark:text-slate-300 ${t}`}
      >
        <div className="relative">
          <img
            src={imagen}
            alt="Logo"
            className="rounded-[50%] w-[200px] h-[200px] object-cover"
          />
          <div
            className={`absolute bottom-[-16px] right-[-16px] text-black dark:text-white w-fit p-3 cursor-pointer ${t}`}
            onClick={viewImg}
          >
            <i className="fas fa-camera "></i>
          </div>
        </div>
        <table className="max-w-[700px] my-4">
          <tbody>
            {arrInfo.map((atribute, id) => (
              <AtributePerfil key={id} value={atribute} />
            ))}
          </tbody>
        </table>
        <button
          className="px-3 py-1 rounded-md bg-green-600 text-white"
          onClick={viewPerfil}
        >
          Editar
        </button>
      </div>
      {formView.img ? (
        <EditImg id={id} setFormView={setFormView} datos={datos} />
      ) : (
        <></>
      )}
      {formView.perfil ? (
        <EditPerfil id={id} setFormView={setFormView} datos={datos} />
      ) : (
        <></>
      )}
    </>
  );
};
