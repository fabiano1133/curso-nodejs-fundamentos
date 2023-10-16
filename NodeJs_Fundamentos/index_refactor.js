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
  }, 4000);
};

const user = getUser();

user
  .then((user) => {
    return getUserPhoneNumber(user.id).then((result) => {
      return {
        user: {
          name: user.name,
          id: user.id,
        },
        phoneNumber: result,
      };
    });
  })
  .then((result) => {
    const address = getAddresAsync(result.user.id);
    return address.then((result_address) => {
      return {
        user: result.user,
        phoneNumber: result.phoneNumber,
        address: result_address,
      };
    });
  })
  .then((result) => {
    console.log(`
      Hello, How are you going? My name is ${result.user.name}, my address is ${result.address.address} and my phone number is
      (${result.phoneNumber.ddd})${result.phoneNumber.phoneNumber}
    `);
  })
  .catch((error) => {
    console.error(error);
  });

const getAddresAsync = util.promisify(getUserAdress);
