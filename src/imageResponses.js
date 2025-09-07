const fs = require('fs');
const path = require('path');

const sponge = fs.readFileSync(path.join(__dirname, '../client/spongegar.png'));

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(sponge);
  response.end();
};

module.exports = { getDankMemes };
