// controllers/users.js
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendAllUsers = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.usersArray));
};

const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end("User updated");
};

const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
module.exports = { 
  sendMe, 
  sendUserCreated,
  sendUserById, 
  sendAllUsers, 
  sendUserDeleted,
  sendUserUpdated
}