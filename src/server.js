const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  // console.log(request.url);
  // comment for minimal warning

  switch (request.url) {
    case '/':
    case '/index':
      return htmlHandler.getIndex(request, response);

    case '/page2':
      return htmlHandler.getPage2(request, response);

    case '/hello':
      return textHandler.getHello(request, response);

    case '/time':
      return textHandler.getTime(request, response);

    case '/helloJSON':
      return jsonHandler.getHelloJSON(request, response);

    case '/timeJSON':
      return jsonHandler.getTimeJSON(request, response);

    case '/dankmemes':
      return imageHandler.getDankMemes(request, response);

    default:
      return htmlHandler.getIndex(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
