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
  return data;
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

export const crearProducto = async (data) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(general.productos, options);
    const result = await response.json();
    console.log(result);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (e) {
    console.log(e);
  }
};

export const editProducts = async (data) => {
  const dynamicUrl = `http://localhost:3001/productos/${data.id}`;
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
