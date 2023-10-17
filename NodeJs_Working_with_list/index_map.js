const service = require("./service");

const main = async () => {
  try {
    const response = await service.getAllPeoples();

    const newArray = response.results.map((people) => {
      return {
        name: people.name,
        height: people.height,
      };
    });
    console.log(newArray);
  } catch (error) {
    console.error(error);
  }
};

main();
