// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require("../middlewares/users")
const sendUserCreated = require("../controllers/users")
const checkEmptyNameAndEmailAndPassword = require("../middlewares/users")
const checkIsUserExists = require("../middlewares/users")
const checkEmptyNameAndEmail = require("../middlewares/users")
const hashPassword = require("../middlewares/users")
const checkAuth = require("../middlewares/auth")
// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);
// routes/users.js
// routes/users.js

// routes/users.js
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  );
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  );
  usersRouter.delete(
      "/users/:id",
      checkAuth,
      deleteUser,
      sendUserDeleted
  );
  usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
