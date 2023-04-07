import { fixCreateData } from "./fix";

const url = "http://localhost:3001/viveros";

export const getApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getOneApi = async (id) => {
  const dynamicUrl = `http://localhost:3001/viveros/${id}`;
  const response = await fetch(dynamicUrl);
  const data = await response.json();
  return data;
};

export const crearVivero = async (data) => {
  const newData = fixCreateData(data);

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
