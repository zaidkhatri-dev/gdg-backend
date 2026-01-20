const express = require("express");
const ENV = require("./config/env.js");
const mongoose = require("mongoose");
const router = require("./routes/routes.js");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.set("io", io);

mongoose
  .connect(ENV.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log("Error"));

app.use("/api", router);

server.listen(ENV.PORT);
