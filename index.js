const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;
const requestIp = require('request-ip');

app.get('/', async (req, res) => {
  const username = req.query.username || 'rambozindia';
  try {

    const clientIp = requestIp.getClientIp(req); 
    const userAgent = req.headers['user-agent'];

    res.send(`Client IP Address: ${clientIp}<br>User Agent: ${userAgent}`);

    // res.send(repos);
  } catch (error) {
    res.status(400).send('Error while getting list of repositories');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
