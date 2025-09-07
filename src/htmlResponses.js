const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '../client/client.html'));
const page2 = fs.readFileSync(path.join(__dirname, '../client/client2.html'));

module.exports.getIndex = this.getIndex;
module.exports.getPage2 = this.getPage2;

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports = { getIndex, getPage2 };
