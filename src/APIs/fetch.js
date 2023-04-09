import {
  fixCreateCredenciales,
  fixCreateProductos,
  fixCreateVivero,
} from "./fix";

const general = {
  viveros: "http://localhost:3001/viveros",
  productos: "http://localhost:3001/productos",
  credenciales: "http://localhost:3001/credenciales",
};

export const getViveros = async () => {
  const response = await fetch(general.viveros);
  const data = await response.json();
  return data;
};

export const getProducts = async () => {
  const response = await fetch(general.productos);
  const data = await response.json();
  return data;
};

export const getCredentials = async () => {
  const response = await fetch(general.credenciales);
  const data = await response.json();
  return data;
};
export const getOneVivero = async (id) => {
  const dynamicUrl = `http://localhost:3001/viveros/${id}`;
  const response = await fetch(dynamicUrl);
  const data = await response.json();
  return data;
};

export const getOneViveroProducts = async (id) => {
  const dynamicUrl = `http://localhost:3001/viveros/${id}/productos`;
  const response = await fetch(dynamicUrl);
  const data = await response.json();
  const onlyProducts = await data[0].productos;
  return onlyProducts;
};

export const getOneProducts = async (id) => {
  const dynamicUrl = `http://localhost:3001/productos/${id}`;
  const response = await fetch(dynamicUrl);
  const data = await response.json();
  return data;
};

export const crearVivero = async (vivero, credenciales) => {
  const fixVivero = fixCreateVivero(vivero);
  const optionsVivero = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fixVivero),
  };

  try {
    const responseVivero = await fetch(general.viveros, optionsVivero);
    const resultVivero = await responseVivero.json();
    console.log(resultVivero);
    // creacion de credenciales en relacion al id del result
    const fixCredenciales = fixCreateCredenciales(
      credenciales,
      resultVivero.id
    );

    const optionsCredenciales = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixCredenciales),
    };
    const responseCredenciales = await fetch(
      general.credenciales,
      optionsCredenciales
    );
    const resultCredenciales = await responseCredenciales.json();
    console.log(resultCredenciales);
    // fin creacion de credenciales
    // creacion de productos
    const fixProductos = fixCreateProductos(resultVivero.id);
    const optionsProductos = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixProductos),
    };
    const responseProductos = await fetch(general.productos, optionsProductos);
    const resultProductos = await responseProductos.json();
    console.log(resultProductos);
    // fin creacion de productos
    // agregando al storage
    const dataStorage = {
      id: resultVivero.id,
    };
    localStorage.setItem("status", JSON.stringify(dataStorage));
    setTimeout(() => {
      window.location.replace("http://localhost:3000/");
    }, 2000);
  } catch (e) {
    console.log(e);
  }
};

export const editVivero = async (data, id) => {
  const dynamicUrl = `http://localhost:3001/viveros/${id}`;
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(dynamicUrl, options);
    const result = await response.json();
    console.log(result);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (e) {
    console.log(e);
  }
};

export const editProducts = async (data, id) => {
  //obtener todos los productos
  const objectProductos = await getOneProducts(id);
  const allProductos = await objectProductos.productos;
  // convertir nuevos productos editado
  const newProducts = allProductos.map((element) => {
    if (element.id === data.id) {
      return data;
    }
    return element;
  });
  // nueva data, acomodando a la estructura del objeto
  let newData = {
    productos: newProducts,
  };
  // enviar a la API
  const dynamicUrl = `http://localhost:3001/productos/${id}`;
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  };
  try {
    const response = await fetch(dynamicUrl, options);
    const result = await response.json();
    console.log(result);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (e) {
    console.log(e);
  }
};
