require('dotenv').config();
const express = require('express');
const app = express();
const server = require('./API/server.js');
const port = process.env.PORT || 4000;
app.use(server);

app.listen(port, () => console.log(`\n** server up on port ${port} **\n`));