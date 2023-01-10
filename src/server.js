import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const connectDb = require("./config/connectdb");
const router = require("./router");
// giup chayj dc dong process.env

const app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);
connectDb();

const port = process.env.PORT || 9000; //Port === undefined => Port = 6060

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is running on the port: " + port);
});
