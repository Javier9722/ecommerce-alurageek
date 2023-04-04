import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Asociados } from "./HomeItems/Asociados/Asociados";
import { getApi } from "../APIs/fetch";
import { Productos } from "./HomeItems/Productos/Productos";

export const HomeApis = () => {
  const [isRender, setIsRender] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi();
      setData(data);
    };
    fetchData();
    setIsRender(true);
  }, []);
  return isRender ? (
    <>
      <Asociados data={data} />
      <Productos data={data} />
    </>
  ) : (
    <></>
  );
};
