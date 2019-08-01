const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String,
    id: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;