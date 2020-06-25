const express = require('express');
const fs = require('fs');
const router = express.Router();

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const writeData = (data) => fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ data });
});

module.exports = router;
