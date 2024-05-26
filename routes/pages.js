const pagesRouter = require("express").Router();
const checkAuth = require("../middlewares/auth")
const checkCookiesJWT = require("../middlewares/auth")
const sendDashboard = require("../controllers/auth")
// routes/pages.js
// Импорты и другие маршруты

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);