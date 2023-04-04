import { fixData } from "./fix";

const url = "http://localhost:3001/viveros";

export const getApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const crearVivero = async (data) => {
  const newData = fixData(data);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
