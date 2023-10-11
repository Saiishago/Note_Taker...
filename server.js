const express = require('express');
//const fs = require('fs');
const PORT = process.env.port || 3001;
const app = express();
const apiRoutes = require('./Develop/routes/apiRoutes.js');
const htmlRoutes = require('./Develop/routes/htmlRoutes.js');

