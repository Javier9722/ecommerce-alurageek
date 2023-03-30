export const getApi = async () => {
  const response = await fetch("http://localhost:3001/viveros");
  const data = await response.json();
  return data;
};
