const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const contactRoutes = require("./routes/contact");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "The Luxe Nomad Backend is Running 🚀",
  });
});

// Server Port
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;