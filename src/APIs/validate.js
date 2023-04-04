import { getApi } from "./fetch";

const url = "http://localhost:3001/viveros";

export const validLogin = async ({ email, password }) => {
  const data = await getApi();
  const result = await data.filter(
    (vivero) =>
      vivero.datos.email === email && vivero.datos.password === password
  );
  if (result.length === 1) {
    const dataStorage = {
      id: result[0].id,
      datos: result[0].datos,
    };
    console.log(dataStorage);
    localStorage.setItem("status", JSON.stringify(dataStorage));
  }
  return result.length === 1 ? true : false;
};
