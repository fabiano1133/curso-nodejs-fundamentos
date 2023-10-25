const { get } = require("axios");

const URL = `https://swapi.dev/api/people`;

const getPeoples = async (nome) => {
  const url = `${URL}/?search=${nome}&format=json`;
  const result = await get(url);
  return result.data.results.map(peopleMap);
};

const peopleMap = (item) => {
  return {
    nome: item.name,
    peso: item.height,
  };
};

module.exports = {
  getPeoples,
  peopleMap,
};
