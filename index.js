require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// API Route
app.get("/", (req, res) => {
  res.json({
    email: "bjemiyor@gmail.com", // Replace with your HNG email
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/bunmijemiyo/gopher", // Replace with your GitHub repo URL
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
