const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/listings', async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(
      'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json',
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).send('Error occurred while fetching data');
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
