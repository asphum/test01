const express = require("express");
const app = express();
// const Photo = require("./models/photos");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
//Define a schema
const port = process.env.port || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const mongoUri = "mongodb://localhost:27017/1waan";
mongoose
  .connect(mongoUri, { useNewUrlParser: true }) //, useCreateIndex: true
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Can not Connect to Database!!!!");
  });

app.get("/photos", async (req, res) => {
  const photo = await Photo.find({});
  res.json(photo);
});

// สร้าง database schema
const Photo = mongoose.model("Photo", {
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  cover_url: { type: String, required: true },
  photo_url: { type: String, required: true },
  details: { type: String, required: false },
  price_m: { type: Number, required: true },
  price_g: { type: Number, required: true },
  vip_level: { type: String, required: false },
  comment: { type: String, required: false },
  star: { type: Number, required: false }
});

// สร้าง instance จาก model
const photo = new Photo({
  name: "ddddd",
  category: "testcat",
  tags: ["test1", "test2", "tag1"],
  cover_url: "https://i.imgur.com/d41E60b.png",
  photo_url: "https://i.imgur.com/d41E60b.png",
  details: "accusamus beatae ad facilis cum similique qui sunt",
  price_m: 50,
  price_g: 3,
  vip_level: "vip1",
  comment: 5,
  hidden: false,
  votes: 4
});

// save ลง database (return เป็น Promise)
// photo.save().then(() => console.log("meow"));

// app.post("/photos", async (req, res) => {
//   const photo = new Photo(req.body);
//   await photo.save();
//   res.send("Add new " + photo + " Completed!");
//   res.status(201).end();
// });

app.get("/", function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.send("Hello API");
});

app.get("/photos", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
  res.json(photos);
});

app.get("/photos/:id", (req, res) => {
  res.json(photos.find(photo => photo.id === req.params.id));
});

app.listen(port, function() {
  console.log("Listening on port", port);
});
