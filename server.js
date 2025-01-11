const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/contactform", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Define Schema and Model
const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        const newContact = new Contact({ firstName, lastName, email, phone, message });
        await newContact.save();
        res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ message: "Failed to submit form" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});