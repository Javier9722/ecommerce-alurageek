import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { transition as t } from "../../../ultilities/tailwind";

import { Vivero } from "./items/Vivero";

export const Productos = ({ viveros }) => {
  const [isRender, setIsRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [existProducts, setExistProducts] = useState(true);

  useEffect(() => {
    setIsRender(true);
  }, []);
  return isRender ? (
    <div className="w-full px-4 lg:px-0 grid gap-4">
      <h1
        className={`font-bold text-[2rem] text-center text-slate-600 dark:text-slate-300 ${t}`}
      >
        Productos
      </h1>
      <div className="grid gap-2">
        {viveros.length !== 0 ? (
          viveros.map((vivero, id) => {
            return (
              <Vivero
                key={id}
                vivero={vivero}
                setIsLoading={setIsLoading}
                existProducts={existProducts}
                setExistProducts={setExistProducts}
              />
            );
          })
        ) : (
          <></>
        )}
        {isLoading ? (
          <ReactLoading type="cylon" color="#cccccc" height={100} width={100} />
        ) : (
          <></>
        )}
      </div>
      {existProducts ? (
        <></>
      ) : (
        <h1 className={`text-center text-slate-300 dark:text-slate-600 ${t}`}>
          No hay Productos
        </h1>
      )}
    </div>
  ) : (
    <></>
  );
};
