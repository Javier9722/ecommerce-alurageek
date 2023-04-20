import { getCredentials } from "./fetch";

const url = "http://localhost:3001/viveros";

export const validLogin = async ({ email, password }) => {
  const data = await getCredentials();
  const result = await data.find(
    (acount) => acount.email === email && acount.password === password
  );

  if (result) {
    const dataStorage = {
      id: result.id,
    };
    localStorage.setItem("status", JSON.stringify(dataStorage));
  }
  return result;
};
