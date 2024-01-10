const express = require('express');
const axios = require('axios');
const path = require('path'); // Add path module

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Serve 'app.js' with the correct MIME type
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'), { type: 'application/javascript' });
  });



app.get('/getProducts', async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const products = response.data.products;

    // Convert the product object to an array
    const productArray = Object.keys(products).map(key => ({
      id: key,
      ...products[key]
    }));

    // Sort data based on descending popularity
    const sortedData = productArray.sort((a, b) => b.popularity - a.popularity);

    // Send the sorted data as a response
    res.json(sortedData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});





















app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
