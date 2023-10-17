const { getAllPeoples } = require("./service");

const main = async () => {
  try {
    const { results } = await getAllPeoples();

    const heroesHeight = results.map((item) => parseInt(item.height));

    const totalHeight = heroesHeight.reduce((previous, next) => {
      return previous + next;
    }, 0);

    console.log("Total Height: ", totalHeight);
  } catch (error) {
    console.error(error);
  }
};

main();
