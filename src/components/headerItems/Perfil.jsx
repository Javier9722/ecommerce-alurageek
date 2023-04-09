import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { Unlogged } from "./status/Unlogged";
import { Logged } from "./status/Logged";
import { getOneVivero } from "../../APIs/fetch";

export const Perfil = () => {
  const [isRender, setIsRender] = useState(false);
  const [vivero, setVivero] = useState(null);
  useEffect(() => {
    const objectStorage = JSON.parse(localStorage.getItem("status"));
    if (objectStorage !== null) {
      const fetchData = async () => {
        const data = await getOneVivero(objectStorage.id);
        setVivero(data);
        setIsRender(true);
      };
      fetchData();
    } else {
      setVivero(null);
      setIsRender(true);
    }
  }, []);

  return isRender ? (
    vivero ? (
      <Logged vivero={vivero} setVivero={setVivero} />
    ) : (
      <Unlogged />
    )
  ) : (
    <ReactLoading type="spin" color="#cccccc" height={20} width={20} />
  );
};
