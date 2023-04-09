import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Asociados } from "./HomeItems/Asociados/Asociados";
import { getViveros, getProducts } from "../APIs/fetch";
import { Productos } from "./HomeItems/Productos/Productos";
import { transition as t } from "../ultilities/tailwind";

export const HomeApis = () => {
  const [isRender, setIsRender] = useState(false);
  const [viveros, setViveros] = useState([]);
  const [existViveros, setExistViveros] = useState(true);

  useEffect(() => {
    const fetchViveros = async () => {
      try {
        const data = await getViveros();
        if (data.length === 0) {
          setExistViveros(false);
        } else {
          setViveros(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchViveros();
    setIsRender(true);
  }, []);
  return isRender ? (
    existViveros ? (
      <>
        <Asociados viveros={viveros} />
        <Productos viveros={viveros} />
      </>
    ) : (
      <div className="h-[500px]">
        <h1 className={`text-center text-slate-300 dark:text-slate-600 ${t}`}>
          No hay viveros Asociados
        </h1>
      </div>
    )
  ) : (
    <div className="h-[500px]"></div>
  );
};
