const service = require("./service");

const main = async () => {
  try {
    const response = await service.getAllPeoples();

    const names = [];

    console.time("for");
    for (let i = 0; i < response.results.length - 1; i++) {
      const people = response.results[i];
      names.push(people.name);
    }
    console.timeEnd("for");

    console.time("for-in");
    for (i in response.results) {
      const people = response.results[i];
      names.push(people.name);
    }
    console.timeEnd("for-in");

    console.time("for-of");
    for (people of response.results) {
      names.push(people.name);
    }
    console.timeEnd("for-of");
    console.log(names);
  } catch (error) {
    console.error(error);
  }
};

main();
