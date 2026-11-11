let users = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
  },
];

function getUsers(req, res) {
  res.status(200).json({ data: users });
}

function getUserById(req, res) {

  const userId = users.find((user) => user.id =  parseInt(req.params.id));

  if(!userId) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ data: userId });


}

module.exports = {
  getUsers,
  getUserById
};
