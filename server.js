const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose
  .connect("mongodb+srv://deepika:c6XWKTuf85KU6Vc6@demo.2uvoc.mongodb.net/", {
    dbName: "suman",
  })
  .then(() => console.log("mongodb connected!"))
  .catch((err) => console.log(err));

// Define schema and model
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  city: String,
});
const userModel = mongoose.model("userModel", userSchema);

// Create and save user data
const createUser = async () => {
  const userData = new userModel({
    firstname: "anju2",
    lastname: "singh2",
    city: "lucknow",
  });
  await userData.save();
  console.log("User data saved!");
};
createUser().catch((err) => console.log("err=>", err)); // Call the function to save user data

app.get("/", (req, res) => {
  res.json("welcome to my server");
});

app.listen(3000, () => {
  console.log("server running port 3000");
});
