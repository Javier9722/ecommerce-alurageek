import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { transition as t } from "../../../ultilities/tailwind";
import { Card } from "./items/Card";

export const Asociados = ({ data }) => {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    setIsRender(true);
  }, []);
  return isRender ? (
    <div>
      <h1
        className={`font-bold text-[2rem] text-center dark:text-slate-300 ${t}`}
      >
        Viveros Asociados
      </h1>
      <div className="flex gap-6">
        {data.length !== 0 ? (
          data.map((item) => {
            const rute = item.datos.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-");
            const id = item.id;
            const data = {
              name: item.datos.name,
              img: item.datos.img,
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
