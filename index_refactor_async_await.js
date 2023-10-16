// Desafios

/*
01 - Obter um usuário
02 - Obter o número de telefone de um usuário a partir de seu ID
03 - Obter o endereço do usuário pelo ID
*/

const util = require("util");

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1515,
        name: "Fabiano Albuquerque",
        dataNascimento: new Date(),
      });
    }, 2000);
  });
};

const getUserPhoneNumber = (user_id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phoneNumber: "99999-9999",
        ddd: "92",
      });
    }, 3000);
  });
};

const getUserAdress = (user_id, cb) => {
  setTimeout(() => {
    return cb(null, {
      address: `Iscar, 789, Green Park, Texas`,
    });
  }, 3000);
};

const getAddresAsync = util.promisify(getUserAdress);

const main = async () => {
  try {
    console.time("medida-promise");
    const user = await getUser();
    // const phoneNumber = await getUserPhoneNumber(user.id);
    // const address = await getAddresAsync(user.id);

    const result = await Promise.all([
      getUserPhoneNumber(user.id),
      getAddresAsync(user.id),
    ]);

    const address = result[1];
    const phoneNumber = result[0];

    console.timeEnd("medida-promise");
    console.log(
      `Hi, my name is ${user.name}, I live in ${address.address} and my phone number is ${phoneNumber.phoneNumber}`
    );
  } catch (error) {
    console.error("Error: ", error);
  }
};
main();
