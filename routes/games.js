// Файл routes/games.js

const gamesRouter = require('express').Router();
const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');
const checkEmptyFields = require("../middlewares/games")
const findGameById = require("../middlewares/games")
const checkIsGameExists = require("../middlewares/games")
const checkIfCategoriesAvaliable = require("../middlewares/categories")
const checkIfUsersAreSafe = require("../middlewares/users")
const checkAuth = require("../middlewares/auth.js")
gamesRouter.get('/games', findAllGames, sendAllGames);



// Маршрут для создания игры
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
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
  checkAuth,
  // Другие миддлвары и контроллеры
);

// Маршрут для удаления игры
gamesRouter.delete(
    "/games/:id", 
    checkAuth, 
    // Другие миддлвары и контроллеры
);
module.exports = gamesRouter;
