import React, { useEffect, useState } from "react";

import { Unlogged } from "./status/Unlogged";
import { Logged } from "./status/Logged";

export const Perfil = () => {
  const [isRender, setIsRender] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("status");
    setData(user !== null ? JSON.parse(user) : null);
    setIsRender(true);
  }, []);

  return isRender ? (
    data ? (
      <Logged data={data} setData={setData} />
    ) : (
      <Unlogged />
    )
  ) : (
    <></>
  );
};
