const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "successful create upstream branch" });
});

app.listen(port, () => console.log(`running on port ${port}`));
