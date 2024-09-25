require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const ResourcesRoutes = require("./routes/ResourcesRoutes");

const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'));


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/resources", ResourcesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
