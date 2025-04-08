

const express = require("express");
const { User, Excuse } = require("./schema");
const router = express.Router();

// CRUD for users
router.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully!", newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: "User updated successfully!", updatedUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CRUD for excuses
router.post("/excuses", async (req, res) => {
    try {
        const newExcuse = new Excuse(req.body);
        await newExcuse.save();
        res.status(201).json({ message: "Excuse added successfully!", newExcuse });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/excuses", async (req, res) => {
    try {
        const excuses = await Excuse.find();
        res.status(200).json(excuses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/excuses/:id", async (req, res) => {
    try {
        const updatedExcuse = await Excuse.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedExcuse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/excuses/:id", async (req, res) => {
    try {
        await Excuse.findByIdAndDelete(req.params.id);
        res.json({ message: "Excuse deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
