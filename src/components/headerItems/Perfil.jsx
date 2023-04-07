import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { Unlogged } from "./status/Unlogged";
import { Logged } from "./status/Logged";
import { getOneApi } from "../../APIs/fetch";

export const Perfil = () => {
  const [isRender, setIsRender] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const objectStorage = JSON.parse(localStorage.getItem("status"));
    if (objectStorage !== null) {
      const fetchData = async () => {
        const data = await getOneApi(objectStorage.id);
        setData(data);
        setIsRender(true);
      };
      fetchData();
    } else {
      setData(null);
      setIsRender(true);
    }
  }, []);

  return isRender ? (
    data ? (
      <Logged data={data} setData={setData} />
    ) : (
      <Unlogged />
    )
  ) : (
    <ReactLoading type="spin" color="#cccccc" height={20} width={20} />
  );
};
