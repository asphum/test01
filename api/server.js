const express = require("express");
const app = express();
// const Photo = require("./models/photos");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.port || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())

const mongoUri = 'mongodb://localhost:27017/1waan'
mongoose
  .connect(mongoUri, { useNewUrlParser: true }) //, useCreateIndex: true 
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Can not Connect to Database!!!!");
  });

  app.get('/photos', async (req, res) => {
    const photo = await Cat.find({})
    res.json(photo)
  })

// สร้าง database schema
  const Cat = mongoose.model('Cat', { name: String })

// mock data
const photos = [{}]

app.get('/', (req, res) => {
  res.send('Hello API')
})


app.post('/photos', async (req, res) => {
  const payload = req.body
  const photo = new Cat(payload)
  await photo.save()
  res.status(201).end()
})


app.listen(port, function() {
  console.log("Listening on port", port);
});
