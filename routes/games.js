const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const { 
  findAllGames, 
  checkEmptyFields, 
  findGameById, 
  checkIsGameExists, 
  checkIsVoteRequest, 
  checkIfUsersAreSafe, 
  createGame, 
  updateGame, 
  deleteGame 
} = require('../middlewares/games');
const { checkIfCategoriesAvaliable } = require("../middlewares/categories");
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameById, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);

// Маршрут для создания игры
gamesRouter.post(
  "/games",
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
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
  updateGame,
  sendGameUpdated
);

// Маршрут для удаления игры
gamesRouter.delete(
  "/games/:id", 
  checkAuth,
  findGameById,
  deleteGame,
  sendGameDeleted
);

module.exports = gamesRouter;