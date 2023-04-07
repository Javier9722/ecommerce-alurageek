import React, { useEffect, useState } from "react";
import { transition as t } from "../../../ultilities/tailwind";
import { AtributePerfil } from "./perfilItems/AtributePerfil";
import { EditPerfil } from "./perfilItems/EditPerfil";
import { EditImg } from "./perfilItems/EditImg";

export const PerfilAdmin = ({ dataVivero }) => {
  const [imagen, setImagen] = useState(dataVivero.datos.img);
  const [formView, setFormView] = useState({
    perfil: false,
    img: false,
  });
  let resVivero = dataVivero.datos;
  let arrInfo = [
    { key: "Nombre", info: resVivero.name },
    { key: "Descripción", info: resVivero.description },
    { key: "Dirección", info: resVivero.direction },
    { key: "Referencia", info: resVivero.referencia },
    { key: "Dueño", info: resVivero.dueno },
    { key: "Correo", info: resVivero.email },
    { key: "Celular", info: resVivero.celular },
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
        <EditImg setFormView={setFormView} resVivero={resVivero} />
      ) : (
        <></>
      )}
      {formView.perfil ? (
        <EditPerfil setFormView={setFormView} resVivero={resVivero} />
      ) : (
        <></>
      )}
    </>
  );
};
