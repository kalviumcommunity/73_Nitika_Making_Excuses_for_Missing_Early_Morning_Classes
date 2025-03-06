const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const {User, Excuse} = require("./schema")
const routes = require("./Routes");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({
    message: "API is running....",
    databsesStatus: dbStatus
  });
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/excuses", async (req, res) => {
  try {
    const { excuseText, category, authorId } = req.body;
    const newExcuse = new Excuse({ excuseText, category, authorId });
    await newExcuse.save();
    res.status(201).json({ message: "Excuse added successfully", newExcuse });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
