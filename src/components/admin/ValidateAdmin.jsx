import React, { useEffect, useState } from "react";
import { HomeAdmin } from "./HomeAdmin";

export const ValidateAdmin = () => {
  const [storage, setStorage] = useState(localStorage.getItem("status"));

  const [id, setId] = useState(undefined);

  const url = new URL(window.location.href).searchParams;
  const urlid = Number(url.get("id"));

  useEffect(() => {
    if (storage !== null) {
      const storageobject = JSON.parse(storage);
      const storageid = storageobject.id;
      setId(storageid);
    }
  }, []);

  return urlid === id ? (
    <>
      <HomeAdmin id={id} />
    </>
  ) : (
    <div>Error, inicie sesion</div>
  );
};
