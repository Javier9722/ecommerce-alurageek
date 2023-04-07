import React, { useEffect, useState } from "react";
import { HeaderAdmin } from "./itemsAdmin/HeaderAdmin";
import ReactLoading from "react-loading";
import { getOneApi } from "../../APIs/fetch";
import { ProductsAdmin } from "./itemsAdmin/ProductsAdmin";
import { PerfilAdmin } from "./itemsAdmin/PerfilAdmin";

export const HomeAdmin = ({ id }) => {
  const [isRender, setIsRender] = useState(false);
  const [dataVivero, setDataVivero] = useState({});
  const [visibleItems, setVisibleItems] = useState({
    perfil: false,
    products: true,
  });
  useEffect(() => {
    const viveros = async () => {
      const data = await getOneApi(id);
      if (data.id === id) {
        setDataVivero(data);
        setIsRender(true);
      }
    };
    viveros();
  }, []);

  return isRender ? (
    <div className="px-2 sm:px-0">
      <HeaderAdmin dataVivero={dataVivero} setVisibleItems={setVisibleItems} />
      {visibleItems.perfil ? (
        <PerfilAdmin id={dataVivero.id} datos={dataVivero.datos} />
      ) : (
        <></>
      )}
      {visibleItems.products ? (
        <ProductsAdmin id={dataVivero.id} productos={dataVivero.productos} />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="w-full h-screen grid place-items-center">
      <ReactLoading type="spin" color="#cccccc" height={100} width={100} />
    </div>
  );
};
