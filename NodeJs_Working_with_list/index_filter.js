const { getAllPeoples } = require("./service");

const genderHeroes = [];

const main = async () => {
  try {
    const { results } = await getAllPeoples();

    const genderFilter = results.filter((people) => people.gender === "male");

    const finalArray = genderFilter.map((people) => {
      return {
        name: people.name,
        height: people.height,
      };
    });

    genderHeroes.push(...finalArray);

    console.log(genderHeroes);
  } catch (error) {
    console.error(error);
  }
};

main();
