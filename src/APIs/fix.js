export const fixCreateData = (data) => {
  const newData = {
    datos: {
      name: data.name,
      description: "",
      direction: data.direction,
      referencia: "",
      img: "",
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
