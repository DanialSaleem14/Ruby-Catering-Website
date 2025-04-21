const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Card = require('./models/datamodel'); 

mongoose.connect('mongodb://localhost:27017/rubyapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));

const app = express();
app.use(cors());
app.use(express.json()); 

app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find(); 
    res.status(200).json(cards); 
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cards', error });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
