const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/login', (req, res) => {
    res.send({data:'data'})
});

module.exports = router;