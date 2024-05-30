const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js")
const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');
const checkEmptyFields = require("../middlewares/games")
const findGameById = require("../middlewares/games")
const checkIsGameExists = require("../middlewares/games")
const checkIfCategoriesAvaliable = require("../middlewares/categories")
const checkIfUsersAreSafe = require("../middlewares/users")
const checkIsVoteRequest = require("../middlewares/games.js")


gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  // Другие миддлвары и контроллеры
);

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

gamesRouter.delete(
    "/games/:id", 
    checkAuth, 
    // Другие миддлвары и контроллеры
);

module.exports = gamesRouter;