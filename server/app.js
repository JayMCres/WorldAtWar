const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const morgan = require("morgan");
const cors = require("cors");

const helmet = require("helmet");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes");

app.use("/", routes);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
