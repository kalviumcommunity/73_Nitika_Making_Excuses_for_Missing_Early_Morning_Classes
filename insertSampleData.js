const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { User, Excuse } = require("./schema.js"); // Import models

dotenv.config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Sample User Data
const users = [
  { name: "John Doe", email: "john@example.com", password: "123456", role: "student" },
  { name: "Alice Smith", email: "alice@example.com", password: "abcdef", role: "teacher" }
];

// Sample Excuse Data (linked to users)
const excuses = [
  { excuseText: "I missed my bus", category: "Transport", likes: 5 },
  { excuseText: "I had a headache", category: "Health", likes: 8 }
];

// Function to insert data
const insertData = async () => {
  try {
    // Insert Users and get their IDs
    const createdUsers = await User.insertMany(users);
    console.log("Users Inserted:", createdUsers);

    // Assign user IDs to excuses
    excuses[0].authorId = createdUsers[0]._id;
    excuses[1].authorId = createdUsers[1]._id;

    // Insert Excuses
    await Excuse.insertMany(excuses);
    console.log("Excuses Inserted");

    mongoose.connection.close(); // Close connection
  } catch (error) {
    console.error("Error inserting sample data:", error);
    mongoose.connection.close();
  }
};

// Run the function
insertData();
