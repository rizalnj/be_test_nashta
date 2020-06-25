const express = require('express');
const fs = require('fs');
const router = express.Router();

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const writeData = (data) => fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ data });
});

router.post('/', (req, res) => {
  const datas = req.body;
  data.push({
    id: Date.now(),
    datas,
  });
  writeData(data);
  res.status(201).json({ message: 'create data success', data });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  writeData(data.filter((item) => item.id != id));
  res.status(201).json({ message: 'delete data success', id });
});

module.exports = router;
