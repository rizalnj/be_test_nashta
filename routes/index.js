const express = require('express');
const fs = require('fs');
const path = require('path');
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
    ...datas
  });
  writeData(data);
  res.status(201).json({ message: 'create data success', data });
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  const datas = req.body;
  const idIndex = data.findIndex(item => item.id == id)
  if (idIndex != -1) {
    let newData = data
    newData[idIndex] = {
      ...data[idIndex],
      ...datas
    }
    writeData(newData);
    res.status(201).json({ message: 'create data success', data: newData });
    return
  }
  res.status(201).json({ message: 'not found data', id });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  if (data.filter((item) => item.id == id).length) {
    writeData(data.filter((item) => item.id != id));
    res.status(201).json({ message: 'delete data success', id });
    return
  }
  res.status(201).json({ message: 'not found data', id });
});

router.post('/send-file', function (req, res) {
  console.log(req.files);

  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.files;

  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv((path.join(__dirname, `../public/images/${sampleFile.name}`)), function (err) {
    if (err)
      return res.status(500).send(err);

    res.json({
      path: `/images/${sampleFile.name}`,
      message: 'File uploaded!'
    });
  });
});

module.exports = router;
