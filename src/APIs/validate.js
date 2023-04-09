import { getCredentials } from "./fetch";

const url = "http://localhost:3001/viveros";

export const validLogin = async ({ email, password }) => {
  const data = await getCredentials();
  const result = await data.filter(
    (acount) => acount.email === email && acount.password === password
  );

  if (result.length === 1) {
    const dataStorage = {
      id: result[0].id,
    };
    localStorage.setItem("status", JSON.stringify(dataStorage));
  }
  return result.length === 1 ? true : false;
};
