const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,  
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum: ["student", "teacher"], 
        default: () => "student"
    },
    createdAt: { type: Date, default: Date.now } 
});

// Excuse Schema
const excuseSchema = new mongoose.Schema({
    excuseText: { type: String, required: true },
    category: { type: String, required: true },
    likes: { type: Number, default: 0 },
    authorId: { type: String, required: true }  
  });
  
  

// Create Models
const User = mongoose.model("User", userSchema);
const Excuse = mongoose.model("Excuse", excuseSchema);

module.exports = { User, Excuse };
