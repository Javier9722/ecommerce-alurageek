export const fixData = (data) => {
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
