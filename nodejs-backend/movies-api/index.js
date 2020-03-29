const express = require('express');
const app = express();
const debug = require('debug')('app:server');

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Body Parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  debug(`Listening http://localhost:${config.port} 🙉`);
});

// https://videos-nine.now.sh/api/movies
