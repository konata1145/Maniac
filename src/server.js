const express = require('express');
const app = express();
const user_info = require('./user_info');

app.use('/user_info',user_info);
const port = 3001;
app.listen(port, () => Console.log('Server is running on ${port}'));