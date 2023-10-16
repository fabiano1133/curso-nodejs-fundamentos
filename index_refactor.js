// Desafios

/*
01 - Obter um usuário
02 - Obter o número de telefone de um usuário a partir de seu ID
03 - Obter o endereço do usuário pelo ID
*/

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
        phoneNumber: "9999-99999",
        ddd: "92",
      });
    }, 3000);
  });
};

const getUserAdress = (user_id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        address: `Iscar, 789, Green Park, Texas`,
      });
    }, 4000);
  });
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
    console.log("RESULT", result);
  })
  .catch((error) => {
    console.error(error);
  });

// getUser((err, user) => {
//   if (err) {
//     console.error(`An Error has occurred: ${err}`);
//     return;
//   }
//   getUserPhoneNumber(user.id, (err1, phoneNumber) => {
//     if (err) {
//       console.error(`An Error has occurred: ${err1}`);
//       return;
//     }
//     getUserAdress(user.id, (err2, userAddress) => {
//       if (err2) {
//         console.error(`An Error has occurred: ${err2}`);
//         return;
//       }
//       console.log(`
//         Name: ${user.name}
//         Address: ${userAddress.address}
//         Phone_Number: (${phoneNumber.ddd})${phoneNumber.phoneNumber}
//       `);
//     });
//   });
// });
