export const fixCreateVivero = (vivero) => {
  const fixVivero = {
    name: vivero.name,
    description: "",
    direction: vivero.direction,
    referencia: "",
    img: "",
    dueno: vivero.dueno,
    email: vivero.email,
    celular: vivero.phone,
  };
  return fixVivero;
};
export const fixCreateCredenciales = (credenciales, id) => {
  const fixCredenciales = {
    email: credenciales.email,
    password: credenciales.password,
    viveroId: id,
  };
  return fixCredenciales;
};
export const fixCreateProductos = (id) => {
  const fixProductos = {
    viveroId: id,
    productos: [],
  };
  return fixProductos;
};

export const fixUpdateData = (data) => {
  const newData = {
    datos: {
      name: data.name,
      description: data.description,
      direction: data.direction,
      referencia: data.referencia,
      img: data.img,
      dueno: data.dueno,
      email: data.email,
      celular: data.phone,
      password: data.password,
    },
    redes: {
      facebook: "",
      instagram: "",
      tiktok: "",
      twitter: "",
    },
    productos: [],
  };

  return newData;
};
