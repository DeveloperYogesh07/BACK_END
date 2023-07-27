
let users = require("../config/Users");
const userMap = require("../config/UsersMap");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const HomePage =  (req, res) => {
  res.send("HomePage");
};

const userArray =  Array.from(userMap);

// For getting all the users
const getAllUsers =  (req, res) => {
  // console.log(userArray);
  res.status(200).json({ sucsess: true, data: userArray });
};

// For posting a new user
const createNewUser =  (req, res) => {
  const { name, email, password } = req.body;
  const id = uuidv4();
  const newUser = [id,{ name, email, password }];
  if (name && email && password) {
    res.status(201).json({ sucsess: true, data: [...userArray, newUser] });
    userArray.push(newUser);
  } else {
    res
      .status(400)
      .json({ sucsess: false, msg: "please provide credantial properly" });
    
  }
};

//  for updating a current user by id
const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  
  // users.map((user)=>console.log(user.id));
  // console.log(users[1].id);
  
  console.log(userMap.has(id));

  // const user = user.find((user) => user.id === parseInt(id));

  if (userMap.has(id)) {
    let updatedUser = {};
    updatedUser.name = name;
    updatedUser.password = password;
    userArray[id] = { ...userArray[id], ...updatedUser };
    
    res.status(200).json({ success: true, data: userArray });
  }
   
  else {
    res
      .status(404)
      .json({ sucsess: false, msg: `no user found with this id ${id}` });
};
}

//  for deleting a user by id
const deleteUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  users = users.filter((user) => user.id !== Number(id));
  return res.status(200).json({ success: true, data: users });
};

module.exports = {
    HomePage,
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById
}
