// Файл routes/games.js

const gamesRouter = require('express').Router();
const findAllGames = require('../middlewares/games.js');
const sendAllGames = require('../controllers/games.js');
const checkEmptyFields = require("../middlewares/games.js")
const findGameById = require("../middlewares/games.js")
const checkIsGameExists = require("../middlewares/games.js")
const checkIfCategoriesAvaliable = require("../middlewares/categories.js")
const checkIfUsersAreSafe = require("../middlewares/users.js")
const checkAuth = require("../middlewares/auth.js")
gamesRouter.get('/games', findAllGames, sendAllGames);

// const { checkAuth } = require("../middlewares/auth.js");

// Маршрут для создания игры
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth
  // Другие миддлвары и контроллеры
);

// Маршрут для обновления игры
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth
  // Другие миддлвары и контроллеры
);

// Маршрут для удаления игры
gamesRouter.delete(
    "/games/:id", 
    checkAuth
    
    // Другие миддлвары и контроллеры
);
module.exports = gamesRouter;