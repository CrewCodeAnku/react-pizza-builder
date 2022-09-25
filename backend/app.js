const express = require("express");
const app = express();
const db = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const userroute = require("./routes/userroute");
const orderroute = require("./routes/orderroute");
const ingredientroute = require("./routes/ingredientroute");

const path = require("path");
var bodyParser = require("body-parser");
helper = require("./utility/helper");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
dotenv.config({ path: ".env" });

app.set("port", process.env.PORT || 8000);

let root = path.join(__dirname, "client/build/");
app.use(express.static(root));
app.use(userroute);
app.use(orderroute);
app.use(ingredientroute);

db.connect(process.env.MONGOCONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(function (res) {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const httpServer = http.createServer(app);

httpServer.listen(app.get("port"), () =>
  console.log(`listening on port ${app.get("port")}`)
);
