const axios = require("axios");

const getBooks = () => {
    axios.get("https://books.google.com/?key=AIzaSyCW8g8cT9ymSEejzmPNvCbmiBpZoCBqFdY&q=stephen-king")
}

module.exports = {
 getBooks
}