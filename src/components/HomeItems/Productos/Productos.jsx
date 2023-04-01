import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { transition as t } from "../../../ultilities/tailwind";

import { Vivero } from "./items/Vivero";

export const Productos = ({ data }) => {
  const [isRender, setIsRender] = useState(false);

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
        {data.length !== 0 ? (
          data.map((vivero, id) => <Vivero data={vivero} key={id} />)
        ) : (
          <ReactLoading type="cylon" color="#cccccc" height={100} width={100} />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
