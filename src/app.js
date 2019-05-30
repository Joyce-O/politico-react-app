const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// app.use(require('prerender-node').set('prerenderServiceUrl', 'https://service.prerender.io/').set('prerenderToken', 'QW3cj98BGoKzV8C4GSdH'));

app.get('/ping', (req, res) => res.send('pong'));
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'bundle.js'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port);
