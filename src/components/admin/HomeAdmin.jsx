import React, { useEffect, useState } from "react";
import { HeaderAdmin } from "./itemsAdmin/HeaderAdmin";
import ReactLoading from "react-loading";
import { getApi } from "../../APIs/fetch";
import { ProductsAdmin } from "./itemsAdmin/ProductsAdmin";
import { PerfilAdmin } from "./itemsAdmin/PerfilAdmin";

export const HomeAdmin = ({ id }) => {
  const [isRender, setIsRender] = useState(false);
  const [dataVivero, setDataVivero] = useState([{}]);
  const [visibleItems, setVisibleItems] = useState({
    perfil: false,
    products: true,
  });
  useEffect(() => {
    const viveros = async () => {
      const data = await getApi();
      const filterData = data.filter((vivero) => vivero.id === id);
      if (filterData.length === 1) {
        setDataVivero(filterData);
        setIsRender(true);
      }
    };
    viveros();
  }, []);

  return isRender ? (
    <div className="px-2 sm:px-0">
      <HeaderAdmin dataVivero={dataVivero} setVisibleItems={setVisibleItems} />
      {visibleItems.products ? <ProductsAdmin /> : <></>}
      {visibleItems.perfil ? <PerfilAdmin /> : <></>}
    </div>
  ) : (
    <div className="w-full h-screen grid place-items-center">
      <ReactLoading type="spin" color="#cccccc" height={100} width={100} />
    </div>
  );
};
