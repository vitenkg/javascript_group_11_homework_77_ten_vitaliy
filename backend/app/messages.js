const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const router = express.Router();
const {nanoid} = require('nanoid');
const modules = require('../modules/ModMessage');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});

const upload = multer({storage});

router.get('/', (req, res) => {

    const messages = modules.getMessages();
    res.send(messages);
});

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    return res.status(422).send({error: 'Нет данных для обработки'});
  }

  if (req.body.author === "") {
    req.body.author = "Anonymous";
  }

  const message  = {
    author: req.body.author,
    text: req.body.text,
  };

  if (req.file) {

    message.image = req.file.filename;
  }

  const newMessage = modules.addMessage(message);

  res.send(newMessage);
});

module.exports = router;