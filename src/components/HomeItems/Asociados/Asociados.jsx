import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { transition as t } from "../../../ultilities/tailwind";
import { Card } from "./items/Card";

export const Asociados = ({ viveros }) => {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    setIsRender(true);
  }, []);
  return isRender ? (
    <div
      className={`w-[inherit] text-slate-600 dark:text-slate-300 ${t} px-4 lg:px-0 mb-2`}
    >
      <h1 className="font-bold text-[2rem] mb-2 text-center">
        Viveros Asociados
      </h1>
      <div className="w-[100%] flex gap-4 overflow-x-auto">
        {viveros.length !== 0 ? (
          viveros.map((item) => {
            const rute = item.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-");
            const id = item.id;
            const data = {
              name: item.name,
              img: item.img,
            };

            return <Card key={id} rute={rute} id={id} data={data} />;
          })
        ) : (
          <ReactLoading type="cylon" color="#cccccc" height={100} width={100} />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
