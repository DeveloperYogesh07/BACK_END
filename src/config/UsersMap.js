const users = require("./Users");
const { v4: uuidv4 } = require('uuid');


 const userMap = new Map(
  users.map((obj) => {
    return [
        uuidv4(obj.id),
      {
        id:obj.id,
        name: obj.name,
        role: obj.role,
        email: obj.email,
        password: obj.password,
      },
    ];
  })
);
// console.log("map object", userMap);



module.exports = userMap;
