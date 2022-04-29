const http = require('http');
const { report } = require('process');
const port = 3000;
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const server = http.createServer(async function(request, response){
  if (request.url === '/metrics') {
    var r = await client.register.metrics();
	//var r = client.register.metrics();
    response.end(r);    
  }
  return response.end('Hello Node.js Server!');
});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});