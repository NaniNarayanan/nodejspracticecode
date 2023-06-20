const http = require('http');

// GET request
http.get('http://example.com/data.json', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log(json);
  });
}).on('error', (err) => {
  console.error(err);
});

// POST request
const postData = JSON.stringify({
  key1: 'value1',
  key2: 'value2'
});

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/data',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log(json);
  });
}).on('error', (err) => {
  console.error(err);
});

req.write(postData);
req.end();
