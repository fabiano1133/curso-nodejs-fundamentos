const axios = require("axios");
const URL = `https://swapi.dev/api/people`;

const getPeopleById = async (id) => {
  const url = `${URL}/${id}`;

  if (!id) {
    throw new Error(`People not found`);
  }

  const response = await axios.get(url);

  return response.data;
};

const getAllPeoples = async () => {
  const url = `${URL}`;

  const response = await axios.get(url);

  return response.data;
};

module.exports = {
  getPeopleById,
  getAllPeoples,
};
