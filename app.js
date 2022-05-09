const express = require('express');
const app = express();
const port = 5000;

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
// });

app.listen(port, () => require('./ramda_js'));