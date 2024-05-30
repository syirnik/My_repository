const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3001',
    "frontend-domain.nomoreddomains.ru"
];

function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD");
    next();
}

module.exports = cors