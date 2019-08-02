const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets for production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// API and view routes
app.use(routes);

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}`);
})