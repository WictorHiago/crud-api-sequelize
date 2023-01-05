const express = require('express');
const server = express();
const routes = require('./routes/routes');
server.use(express.json());

/* connection database */
require('./database');
server.use(routes);
server.listen(3000, () => console.log('server on http://localhost:3000'));
