import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { transition as t } from "../ultilities/tailwind";

export const Other = ({ data }) => {
  const [isRender, setIsRender] = useState(false);
  const [newData, setNewData] = useState(data);
  useEffect(() => {
    setIsRender(true);
  }, []);
  useEffect(() => {
    setNewData(data);
    console.log("other");
    console.log(data);
  }, [data]);

  return isRender ? (
    <>
      <h1
        className={`font-bold text-[2rem] text-center dark:text-slate-300 ${t}`}
      >
        Viveros Asociados
      </h1>
      <div className="flex gap-6">
        {newData.length !== 0 ? (
          newData.map((item, id) => (
            <a
              href="#"
              key={id}
              className="w-[150px] flex flex-col gap-2 items-center"
            >
              <img className="w-[100px] rounded-[50%]" src={item.datos.img} />
              <p className="text-sky-600">{item.datos.name}</p>
            </a>
          ))
        ) : (
          <ReactLoading type="cylon" color="#cccccc" height={100} width={100} />
        )}
      </div>
    </>
  ) : (
    <></>
  );
};
