const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server started on port 3001");
  });
});
