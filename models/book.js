const mongoose = require("mongoose");
const Schema = mongoose.Schema
// Model for db entries(books)
const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String,
    // adding the googleID for a React Key and for deleting/saving books
    id: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;