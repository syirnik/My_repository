const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js")
const { findAllGames, checkEmptyFields, findGameById, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games');
const { checkIfCategoriesAvaliable } = require("../middlewares/categories");
const { checkIfUsersAreSafe } = require("../middlewares/users");
const { sendAllGames } = require("../controllers/games");

gamesRouter.get('/games', findAllGames, sendAllGames);

// Маршрут для создания игры
gamesRouter.post(
  "/games",
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