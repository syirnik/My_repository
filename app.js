
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter =require("./routes/api")
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const pagesRouter = require("./routes/pages")

const app = express();
const PORT = 3001;

connectToDatabase();

// app.js
// Импорты и инициализация приложения

// Другие импорты
const cookieParser = require("cookie-parser");

// Конфигурация приложения

// Импорты и конфигурация приложения

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  apiRouter,
  pagesRouter,
  express.static(path.join(__dirname, "public"))
);

// Остальной код

// Остальной код

// Запуск приложения
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
