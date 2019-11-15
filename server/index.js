const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/api", (res, req) => {
  req.send({ message: "hello" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
