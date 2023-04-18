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
    await fetch(general.viveros, optionsVivero)
      .then((r) => r.json())
      .then((e) => {
        console.log(e);
        const dataStorage = {
          id: e.id,
        };
        localStorage.setItem("status", JSON.stringify(dataStorage));
        return e;
      })
      .then((e) => fixCreateCredenciales(credenciales, e.id))
      .then((fixCredenciales) => {
        let optionsCredenciales = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fixCredenciales),
        };
        return optionsCredenciales;
      })
      .then(async (optionsCredenciales) => {
        await fetch(general.credenciales, optionsCredenciales).then(() =>
          window.location.replace("http://localhost:3000/")
        );
      });
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
    await fetch(dynamicUrl, options)
      .then((r) => r.json())
      .then((e) => console.log(e))
      .then(() => window.location.reload());
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
    await fetch(general.productos, options)
      .then((r) => r.json())
      .then((e) => console.log(e))
      .then(() => window.location.reload());
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
    await fetch(dynamicUrl, options)
      .then((r) => r.json())
      .then((e) => console.log(e))
      .then(() => window.location.reload());
  } catch (e) {
    console.log(e);
  }
};

export const deleteProducts = async (idProducto) => {
  const dynamicUrl = `http://localhost:3001/productos/${idProducto}`;
  const options = {
    method: "DELETE",
  };
  try {
    await fetch(dynamicUrl, options).then(() => window.location.reload());
  } catch (e) {
    console.log(e);
  }
};
