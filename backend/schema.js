const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,  // ✅ Fixed spelling
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
    createdAt: { type: Date, default: Date.now } // ✅ Fixed casing
});

// Excuse Schema
const excuseSchema = new mongoose.Schema({
    excuseText: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    likes: { 
        type: Number, 
        default: 0
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId, // ✅ Fixed "Type" → "Types"
        ref: "User", // ✅ Fixed reference name
        required: true // ✅ Fixed spelling
    },
    createdAt: { type: Date, default: Date.now } // ✅ Fixed casing
});

// Create Models
const User = mongoose.model("User", userSchema);
const Excuse = mongoose.model("Excuse", excuseSchema);

module.exports = { User, Excuse };
