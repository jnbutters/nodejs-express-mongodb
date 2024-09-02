const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
  //origin: "http://localhost:8081"
  //origin: process.env.FRONTEND_URI
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./backend/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database! - tag 3.0");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jbutters application." });
});

require("./backend/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}.`);
});