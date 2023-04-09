import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { transition as t } from "../../../../ultilities/tailwind";
import { getOneViveroProducts } from "../../../../APIs/fetch";

export const Vivero = ({
  vivero,
  setIsLoading,
  existProducts,
  setExistProducts,
}) => {
  const [productos, setProductos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getOneViveroProducts(vivero.id);
        setCount(count + data.length);
        setProductos(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    // console.log(count);
    if (count === 0 || count === NaN) {
      setExistProducts(false);
    } else {
      setExistProducts(true);
    }
  }, [count]);
  let imagen = vivero.img;
  imagen == ""
    ? (imagen =
        "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    : "";

  return productos.length > 0 ? (
    <div
      className={`w-[inherit] grid gap-2 bg-slate-100 p-2 rounded-3xl dark:bg-slate-800 dark:text-slate-300 ${t}`}
    >
      <div className="flex gap-2 items-center">
        <img
          src={imagen}
          alt={vivero.name}
          className="rounded-[50%] w-[40px] h-[40px] object-cover"
        />
        <h1>{vivero.name}</h1>
      </div>
      <div className="flex gap-4 pl-12 overflow-x-auto">
        {productos.map((item, id) => (
          <ProductCard key={id} producto={item} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
