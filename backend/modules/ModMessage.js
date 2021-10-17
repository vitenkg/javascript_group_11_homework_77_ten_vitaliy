const fs = require('fs');
const {nanoid} = require("nanoid");

const filename = './messagesServer.json';
let data = [];

module.exports = {
  init() {
    try {
      const fileContents = fs.readFileSync(filename);
      data = JSON.parse(fileContents);

    } catch (e) {
      data = [];
    }
  },
  getMessages() {
      return data;
  },
  addMessage(mess) {
    mess.id = nanoid();
    mess.datetime = new Date().toISOString();
    data.push(mess);
    this.save();
    return mess;
  },
  eraseMessages() {
    data = [];
    this.save();
    return data;
  },
  save() {
    console.log('file was saved');
    fs.writeFileSync(filename, JSON.stringify(data));
  },
  add(data) {
    fs.appendFileSync(filename, JSON.stringify(data));
  }

};