// Features: Sections like About Me, Projects, Contact Form, and Resume; Use JavaScript for interactive elements (like animations or smooth scrolling); Host it on a platform like GitHub Pages.

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const https = require('https');


const server = http.createServer(async (req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  // page load requests
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    if ('student' in params) {
      // student is leon, case insensitive
      if (params['student'].toLowerCase() === 'leon') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          name: 'leon',
          status: 'Boss Man',
          currentOccupation: 'Baller',
          flip: `${flip === 1 ? 'heads' : 'tails'}`,
        };
        res.end(JSON.stringify(objToJson));
        // student is anything other than leon, case insensitive
      } else if (params['student'].toLowerCase() !== 'leon') {
        res.writeHead(701, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/test-route') {
    const response = await fetch("https://zenquotes.io/api/today");
    const jsonResponse = await response.json();
    const quote = jsonResponse[0].q;
    console.log(quote);
    res.setHeader("Content-Type", "text/plain")
    res.end(quote);

  }
  // when HTML makes a stylesheet request
  else if (page == '/css/styles.css') {
    fs.readFile('css/styles.css', function (err, data) {
      res.write(data);
      res.end();
    });
    // when HTML makes a script request
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
